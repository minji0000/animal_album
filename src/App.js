import TabBar from "./components/TabBar";
import Content from "./components/Content";
import TabBar from "./components/TabBar";

export default function App($app) {
  this.state = {
    currentTab : 'all',
    photos:[],
  };

  const tabBar = new TabBar({
    initialState: '',
    onClick: (name) => {
      this.setState({
        //문법 이해 X
        ...this.state,
          currentTab: name,
          photos,
      })
    }
    ,
  });
  const content = new Content();

  this.setState = (newState) => {
    this.state = newState;
    tabBar.setState(this.state.currentTab);
    content.setState(this.state.photos);
  }


}