import { ICON_OPTIONS } from "@/constants/icon-options";
import { useEffect, useState } from "react";

type IconPickerProp = {
  onSelect: (value: string) => void;
  value?: string;
};

const IconPicker = ({ onSelect, value }: IconPickerProp) => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  useEffect(() => {
    if (value) {
      setSelectedIcon(value);
    }
  }, [value]);

  return (
    <div>
      <label className="text-gray-600 text-xs">Wähle ein Icon</label>
      <div className="mt-1 flex gap-2 flex-wrap">
        {ICON_OPTIONS.map(({ icon: Icon, bg, value, color }) => (
          <button
            key={value}
            type="button"
            className={`p-2 rounded-md ${bg} ${color} cursor-pointer ${
              selectedIcon === value ? "ring-2 ring-offset-1" : ""
            } transition-all`}
            onClick={() => {
              setSelectedIcon(value);
              onSelect(value);
            }}
          >
            <Icon />
          </button>
        ))}
      </div>
    </div>
  );
};
export default IconPicker;
