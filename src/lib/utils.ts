export function cn(...classes: (string | boolean | Record<string, boolean> | undefined)[]): string {
    return classes
      .flatMap(c => 
        typeof c === "object" && c !== null 
          ? Object.entries(c).filter(([_, value]) => value).map(([key]) => key) 
          : c
      )
      .filter(Boolean)
      .join(" ");
  }  