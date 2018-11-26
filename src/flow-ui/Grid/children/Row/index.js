import Presenter from "./Presenter";
import { compose } from "recompose";

const Row = compose(Presenter);
Row.displayName = "Row";

export default Row;
