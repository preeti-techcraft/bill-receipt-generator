import React from 'react';

interface InputGroupProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  step?: string;
  containerClassName?: string;
  disabled?: boolean;
}

const InputGroup: React.FC<InputGroupProps> = ({ label, name, value, onChange, type = 'text', step, containerClassName = '', disabled = false }) => {
  return (
    <div className={`flex flex-col ${containerClassName}`}>
      <label htmlFor={name} className="mb-1 text-sm font-medium text-slate-600 dark:text-slate-400">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        step={step}
        disabled={disabled}
        className="w-full p-2 border border-slate-300 dark:border-slate-600 rounded-md bg-slate-50 dark:bg-slate-700 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
      />
    </div>
  );
};

export default InputGroup;