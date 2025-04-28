import TabBar from "./components/TabBar.js";
import Content from "./components/Content";
import { request } from "./components/api.js";

export default function App($app) {
  this.state = {
    currentTab : 'all',
    photos:[],
  };

  const tabBar = new TabBar({
    $app,
    initialState: '',
    onClick: async(name) => {
      this.setState({
        //강의 차수 2. 2-2 3:00 부분
        //문법 이해 X 
        //스프레드 연산자?
        ...this.state,
          currentTab: name,
          photos : await request(name)
      });
    },

  });
  const content = new Content();

  this.setState = (newState) => {
    this.state = newState;
    tabBar.setState(this.state.currentTab);
    content.setState(this.state.photos);
  }

  const init = () => {
    try {
      const initialPhotos = await request();
      this.setState({
        ...this.state,
        photos:initialPhotos,
      })
    } catch(err) {
      console.log(err);
    }
  };

  init();
}