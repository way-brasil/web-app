const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Efeitos: any = async (
  elementRef: any,
  setExist: any,
  effect: any,
  type: any,
) => {

  if (type == "in") {
    elementRef.current.classList.add(`${effect}`);
    setExist(true);

  } else if(type == "out"){
    elementRef.current.classList.add(`${effect}`);
    await delay(700);
    setExist(false);
    elementRef.current.classList.remove(`${effect}`);
  }

};

export default Efeitos;
