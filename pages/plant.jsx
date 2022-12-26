import CanvasTree from "../components/CanvasTree";
import useLsystem from "../hook/lsystem.hook";

export default function plant(params) {
  // call to action <button onClick={() => {}}>Plant Tree</button>
  // make transaction to blockchain
  // plant tree
  // get tree id
  useLsystem("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");

  // 1. отрисовать дерево
  // 2. делаем картинку из canvas
  // 3. отправляем картинку на пиньяту
  // 4. получаем хеш картинки
  // 5. отправляем opensea
  // 6. получаем MetaData для восстановления 3д дерева на сайте
  // другой вариант - думаем над другой концепцией сохранения кода дерева

  return (
    <div className="w-screen h-screen">
      <button onClick={() => {}}>Plant Tree</button>
      <CanvasTree
      // sentence={sentence}
      // trigger={trigger}
      // setTrigger={setTrigger}
      // rule0={rule0}
      // rule1={rule1}
      // rule2={rule2}
      // rule3={rule3}
      // angle={angle}
      // length={segmentLength}
      // radius={segmentRadius}
      // lengthModifier={lengthModifier}
      // radialModifier={radialModifier}
      // color={color} //cтвол
      // color2={color2} //листья
      // color3={color3} //цвет плода
      // texture={texture}
      />
    </div>
  );
}
