import { Checkbox } from "@/components/ui/checkbox";
import { categories } from "@/data/categories";

function CompoundSelector({ selected, onChange }) {
  const toggleCategory = (cat) => {
    if (selected.includes(cat.id)) {
      // 1. Si ya está seleccionado, lo deseleccionamos.
      // Si tiene children, filtramos también para quitar los IDs de los hijos.
      let idsToRemove = [cat.id];
      if (cat.children) {
        const childrenIds = cat.children.map((child) => child.id);
        idsToRemove = [...idsToRemove, ...childrenIds];
      }

      onChange(selected.filter((id) => !idsToRemove.includes(id)));
    } else {
      // 2. Si no está seleccionado, lo añadimos
      onChange([...selected, cat.id]);
    }
  };

  const toggleChild = (childId) => {
    if (selected.includes(childId)) {
      onChange(selected.filter((id) => id !== childId));
    } else {
      onChange([...selected, childId]);
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
                onCheckedChange={() => toggleCategory(category)}
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
                      onCheckedChange={() => toggleChild(child.id)}
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
