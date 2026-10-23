import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ModeSelector({ value, onChange }) {
  return (
    <div className="flex flex-row items-center mb-4">
      <label className="text-sm font-medium">
        Mode de pràctica
      </label>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="ml-3">
          <SelectValue placeholder="Selecciona un mode" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="formula-to-name">
            Compost → nom
          </SelectItem>

          <SelectItem value="name-to-formula">
            Nom → compost 
          </SelectItem>

          <SelectItem value="random">
            Aleatori
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default ModeSelector;
