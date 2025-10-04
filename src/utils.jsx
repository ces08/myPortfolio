export function renderBold(text) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} className="font-bold ">
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
}
