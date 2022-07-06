function transformOne(
  element: string,
  to: "msat" | string,
): string | number | bigint {
  if (!element) {
    return element;
  }
  if (to === "msat") {
    // If element ends with msat, remove it and convert to bigint
    return BigInt(element.endsWith("msat") ? element.slice(0, -4) : element);
  }
  throw new Error("Transform not supported");
}

export function transform<ReturnType = unknown>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transformMapData: any,
): ReturnType {
  if (typeof transformMapData === "string") {
    return transformOne(data, transformMapData) as unknown as ReturnType;
  }
  let key:
    | string
    | Record<string, string>
    | Record<string, Record<string, string>>;
  for (key of Object.keys(transformMapData)) {
    if (!data[key]) continue;
    if (Array.isArray(data[key])) {
      //transformMapData[key] is an object.
      // For every key of that object, transform the value by converting every array element which matches the key
      // with _transformOne
      // data[key] is an array of objects
      data[key] = data[key].map(
        (obj: Record<string, string | number | bigint>) => {
          for (const objKey of Object.keys(transformMapData[key as string])) {
            if (
              !obj || !obj[objKey] || !transformMapData[key as string][objKey]
            ) {
              continue;
            }
            obj[objKey] = transform(
              obj[objKey] as string,
              transformMapData[key as string][objKey],
            );
          }
          return obj;
        },
      );
    } else if (typeof data[key] !== "string") {
      // data[key] is an object
      //transformMapData[key] is an object.
      // For every key of transformMapData[key], transform the corresponding value of data[key] by converting with _transformOne
      for (const objKey of Object.keys(transformMapData[key as string])) {
        if (!data[key][objKey]) continue;
        data[key][objKey] = transform(
          data[key][objKey] as string,
          transformMapData[key as string][objKey],
        );
      }
    } else {
      data[key] = transformOne(data[key], transformMapData[key as string]);
    }
  }
  return data;
}
