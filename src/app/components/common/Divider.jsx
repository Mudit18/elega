export default function Divider(props) {
  return (
    <div className={`w-full lg:w-3/5 mx-auto ${props.className}`}>
      <div className="border-t border-customGrayBorder"></div>
    </div>
  );
}