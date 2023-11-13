import { Component } from "react";
import Content from "./components/Content";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import "./App.css";

import carbImg from "./img/carb.jpeg";
import nutritionImg from "./img/nutrition.jpeg";
import protienImg from "./img/protein.jpeg";
import fatImg from "./img/fat.jpeg";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      selected_content_id: 1,
      subject: { title: "3대 영양소", sub: "탄단지", image: nutritionImg },
      welcome: {
        title: "welcome", desc: "영양소(營養素, 영어: nutrient)는 생명활동과 성장을 위해 생물체의 외부에서 받아들여야 하는 화합물이다. 많은 생물체들은 영양소를 이용하여 에너지를 생산하며, 세포를 구성한다.        인간에게 필요한 영양소에는 주영양소(主營養素) 또는 대량 영양소(macronutrient)인 탄수화물, 단백질, 지방이 대표적이며, 3대 영양소라고 불리기도 한다. 추가적으로 물이 언급되기도 한다. 주영양소는 물질대사를 통해 에너지를 생산하는 역할을 한다. 또, 단백질은 에너지 생산 외에도, 인체의 각 장기들의 주 성분으로 몸을 구성하고, 호르몬으로 사용되어 생리작용을 조절하기도 한다. 비타민, 무기질, 물은 부영양소(또는 미량영양소)로 취급된다."
        , image: nutritionImg
      },
      contents: [
        {
          id: 1, title: "탄수화물", desc: "일상에서 빵, 밥 등을 통해 가장 쉽게 찾아볼 수 있는 에너지원으로,        인류가 농업기술의 개발인 신석기 혁명을 일으킨 이후 정착하고 문명을 일구는 데 공헌한 화합물이나, 그 이면에는 과도한 탄수화물 섭취에 따른 2형 당뇨병 등 인슐린 저항성에 기반한 대사 증후군을 일으키는 원인으로 주목되고 있다. 이에 대중들에게 친숙하지 않은 ‘탄수화물’이라는 표기보다는 전반적인 이해도를 넓히기 위하여 통칭을 바꾸어야 한다는 의견도 있다. 나이 지긋한 어르신들도 ‘당을 줄여라.’ 는 철칙은 알고 있지만 매한가지로 ‘탄수화물을 줄여라.’라는 명제에는 잘 공감하지 않기 때문이다. 특히 동아시아에서는 예로부터 ‘밥심’, ‘밥이 보약’, ‘한국인은 밥을 먹어야 한다.’ 등과 같은 관념이 지배적이기 때문에 더욱 탄수화물 섭취를 주의하기가 쉽지 않다. 한때 단백질(蛋白質)이나 지질(脂質)에 대응하여 탄수화물도 당질(糖質)이란 용어로 바꾸자는 운동이 있었으나, 효과는 미미한 편이었다. 반면 일본에서는 당질이라는 표기도 널리 쓰인다."
          , image: carbImg
        },
        {
          id: 2, title: "단백질", desc: "생물체 내에서 단백질은 만능이라 해도 좋을 정도로 다양하게 쓰인다. 생물체 내에서 일어나는 복잡한 화학반응을 일으키는 효소들은 대부분[1] 단백질이다.[2] 근육과 같이 몸을 구성하는 역할도 한다. 뿐만 아니라 면역에 중요한 항체도 단백질로 이루어졌으며, DNA 사슬을 감아 뭉치고 2차적 유전정보를 저장하는 히스톤도 단백질이고, 연골, 피부, 가죽, 털, 비늘 등을 이루는 주성분 콜라겐과 케라틴도 단백질이다. 거기다 몇몇 호르몬까지도 단백질이다. 즉, 생물의 기본적인 DNA 복제서부터 생물의 외형 형성에 이르기까지 생명의 정수이자 필수 요소, 생명체의 거의 모든 것으로 작용하는 물질. 생명 현상의 정수라고까지 일컬어지는 센트럴 도그마가 단백질의 합성 과정이라는 부분에서부터 얼마나 중요한지 알 수 있는 물질."
          , image: protienImg
        },
        {
          id: 3, title: "지방", desc: "지방(脂肪, 영어: fat)은 탄수화물, 단백질과 함께 세 가지 주영양소 중 하나이다.[1] 지방은 주로 탄소 원자와 수소 원자로 구성되어 있어서 소수성이며, 유기 용매에 잘 녹고, 물에는 잘 녹지 않는다. 지방은 인지질, 콜레스테롤과 함께 지질의 종류 중 하나이다.지방은 1g당 9kcal의 열량을 내는 영양소로 신체의 성장과 균형을 이루는 데 상당히 중요한 영양소입니다. 지방은 땅콩, 호두, 육류, 생선류 등에 많이 함유되어 있는데요,피부 아래층에 쌓여 체온을 유지하고 뇌와 신경세포를 구성하며 충격을 완화하는 역할을 합니다."
          , image: fatImg
        },
      ],
    };
  }
  render() {
    var _title,
      _desc, _image = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _image = this.state.welcome.image;
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          _image = data.image;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({ mode: "read", selected_content_id: Number(id) });
          }.bind(this)}
        ></TOC>
        <Content title={_title} desc={_desc} img={_image}></Content>
      </div>
    );
  }
}

export default App;