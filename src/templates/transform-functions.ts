function transformOne(
  element: string | number | bigint,
): number | undefined {
  if (!element) {
    return element as number | undefined;
  }
  // If element ends with msat, remove it and convert to number
  return Number(
    element.toString().endsWith("msat")
      ? element.toString().slice(0, -4)
      : element,
  );
}

// Recursively loop through an object and change values ending in _msat by running transformOne() on them
// Also handle array inside the object if the array contains objects
export function transform<ReturnType = unknown>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
): ReturnType {
  if (Array.isArray(data)) {
    return data.map((element) => transform(element)) as unknown as ReturnType;
  }
  if (typeof data === "object") {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) =>
        [key, transform(value)] as [string, ReturnType]
      ),
    ) as unknown as ReturnType;
  }
  return transformOne(data) as unknown as ReturnType;
}
