import { PureComponent } from "react";
import { Provider } from "react-redux";
import store from "@/store";
import "./app.scss";

class App extends PureComponent {
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
