interface ButtonProps {}

type MergeProps = ButtonProps;

export function Button({}: MergeProps) {
  return (
    <button type='button'>
      <p className='text-2xl font-bold underline text-primary bg-primary'>
        버튼
      </p>
    </button>
  );
}
