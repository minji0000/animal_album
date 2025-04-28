//모듈로서 사용
export default function TabBar({$app, nitialState, onCLick}) {
  this.state = initialState;
  this.onCLick = onCLick;

  this.$target = document.createElement('div');
  this.$target.className = 'tab-bar';
  $app.appendChild(this.$target);

  this.template = ()=> {
    let temp = `<div id="all">전체</div><div id="penguin">펭귄</div>
      <div id="koala">코알라</div><div id="panda">판다</div>`;
    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();
  };

  this.setState = (newState)=> {
    this.state = newState;
    this.render();
  };

  this.render();
}