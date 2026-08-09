import { Input } from "@/components/ui/input";

function LengthSelector({ value, onChange }) {
  return (
    <div className="flex flex-row items-center mb-4">
      <label className="text-sm font-medium mr-4">
        Exercicis per sessió
      </label>

      <Input value={value} onValueChange={onChange} className="w-fit" type="number" max={50} min={1}/>
    </div>
  );
}

export default LengthSelector;
