interface Props {
  label: string;
}

export const LoadingPageCustom = ({label}: Props) => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-100px)] text-xl text-slate-600">
      {label}
    </div>
  )
}