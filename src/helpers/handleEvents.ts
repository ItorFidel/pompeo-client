export function handleEventChange<T>(
  e: React.ChangeEvent<HTMLInputElement>,
  setState: React.Dispatch<React.SetStateAction<T>>
) {
  const { name, value } = e.target;
  setState((state) => ({ ...state, [name]: value }));
}

export function handleEventBlurCapture<T>(
  e: React.FocusEvent<HTMLInputElement, Element>,
  setState: React.Dispatch<React.SetStateAction<T>>
) {
  const { name, value } = e.target;
  setState((state) => ({ ...state, [name]: !value ? true : false }));
}
