import { Checkbox } from "@/components/ui/checkbox";
import { categories } from "@/data/categories";

function CompoundSelector({ selected, onChange }) {
  const toggleCategory = (id) => {
    if (selected.includes(id)) {
      onChange(selected.filter((category) => category !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div className="space-y-3">
      <div>
        <label className="text-sm font-medium">
          Compostos a practicar
        </label>

        <p className="text-sm text-muted-foreground">
          Selecciona una o més categories.
        </p>
      </div>

      <div className="rounded-lg border p-4 space-y-4">
        {categories.map((category) => (
          <div key={category.id} className="space-y-3">
            <div className="flex items-center gap-3">
              <Checkbox
                id={category.id}
                checked={selected.includes(category.id)}
                onCheckedChange={() => toggleCategory(category.id)}
              />

              <label
                htmlFor={category.id}
                className="cursor-pointer text-sm font-medium"
              >
                {category.label}
              </label>
            </div>

            {category.children && selected.includes(category.id) && (
              <div className="ml-7 space-y-3 border-l pl-4">
                {category.children.map((child) => (
                  <div
                    key={child.id}
                    className="flex items-center gap-3"
                  >
                    <Checkbox
                      id={child.id}
                      checked={selected.includes(child.id)}
                      onCheckedChange={() => toggleCategory(child.id)}
                    />

                    <label
                      htmlFor={child.id}
                      className="cursor-pointer text-sm"
                    >
                      {child.label}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        {selected.length === 0
          ? "No has seleccionat cap categoria."
          : `${selected.length} categoria${
              selected.length === 1 ? "" : "es"
            } seleccionada${
              selected.length === 1 ? "" : "s"
            }.`}
      </p>
    </div>
  );
}

export default CompoundSelector;
