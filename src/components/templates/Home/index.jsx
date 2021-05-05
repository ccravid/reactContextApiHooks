/* eslint-disable no-unused-vars */
import { Button } from "../../Button/button";
import { useCounterContext } from "../../contexts/counterContext";
import {Heading} from '../../Heading/heading'

export const Home  = () => {
  const [state,dispatch] = useCounterContext()

  const handleError = () => {
    dispatch.asyncError()
      .then((r) => console.log(r))
      .catch((e) => console.log(e.name, ':', e.message));
  };

    return (
    <div>
      <Heading>Counter: {state.counter}</Heading>
      <div>
        <Button onButtonClick={()=>dispatch.increase()}>Increase</Button>
        <Button onButtonClick={()=>dispatch.decrease()}>Decrease</Button>
        <Button onButtonClick={()=>dispatch.reset()}>Reset</Button>
        <Button disabled ={state.loading} onButtonClick={()=>dispatch.asyncIncrease()}>async Increase</Button>
        <Button disabled ={state.loading}  onButtonClick={handleError}>async Error</Button>
        <Button onButtonClick={()=>dispatch.setCounter({counter:10})}>set 10</Button>
      </div>
    </div>
    );
  }
