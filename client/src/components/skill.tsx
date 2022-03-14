import * as React from 'react'
import styled from 'styled-components'
import {pc, sp, tab} from '../styles/responsive'
import Rating from '@mui/material/Rating'
import Fargate from '../images/icons/fargate.png'
import Datadog from '../images/icons/datadog.png'
import Terraform from '../images/icons/terraform.png'
import GoIcon from '../images/icons/go.png'
import Typescript from '../images/icons/typescript.png'
import ReactIcon from '../images/icons/react.png'
import Vue from '../images/icons/vue.png'
import PHP from '../images/icons/php.png'
import Laravel from '../images/icons/laravel.png'
import Scala from '../images/icons/scala.png'

const width = document.documentElement.clientWidth

const Wrap = styled.section`
  position: relative;
  width: 100%;
`

const H3 = styled.h3`
  font-weight: bold;
  padding-top: 100px;
  
  ${sp`
    font-size: 5em;
    text-align: center;
  `}
  ${tab`
    font-size: 6em;
    text-align: center;
  `}
  ${pc`
    font-size: 6em;
    padding-left: 150px;
  `}
`

const Ul = styled.ul`
  ${sp`
    margin: 25px 45px 0 45px;
  `}
  ${tab`
    margin: 25px 125px 0 125px;
  `}
  ${pc`
    margin: 50px 0 0 150px;
  `}
`

const Li = styled.li`
  margin-bottom: 20px;
  
  ${sp`
    display: block;
  `}
  ${tab`
    display: block;
  `}
  ${pc`
    display: inline-flex;
    width: ${width / 10 * 4}px;
    max-width: 480px;
    margin-right: 20px;
  `}
`

const Detail = styled.section`
  background-color: #FFFFFF;
  border-radius: 15px;
  
  ${pc`
    width: ${width / 10 * 4}px;
    max-width: 480px;
    height: 260px;
  `}
`

const DetailTitle = styled.div`
  padding: 25px 0 0 25px;
  
  ${sp`
    font-size: 1.75em;
  `}
  ${tab`
    font-size: 2em;
  `}
  ${pc`
    font-size: 2em;
  `}
`

const DetailBody = styled.div`
  padding: 25px 35px 25px 35px;

  ${sp`
    font-size: 1.4em;
  `}
  ${tab`
    font-size: 1.5em;
  `}
  ${pc`
    font-size: 1.5em;
  `}
`

const Icon = styled.img`
  display: inline;
  width: 35px;
  height: 35px;
  object-fit: contain;
  vertical-align: middle;
`

const NoIcon = styled.div`
  display: inline-block;
  width: 35px;
  height: 35px;
  vertical-align: middle;
`

const Name = styled.span`
  vertical-align: middle;
  margin-left: 15px;
`

const Star = styled(Rating)`
  vertical-align: middle;
  margin-left: 15px;
`

const BodySection = styled.ul`
  padding: 0 10px;
`

const Sentence = styled.li`
  margin: 10px 0;
  line-height: 1.4em;
  list-style: disc;
`

const A = styled.a`
  color: #00608D;
  text-decoration: none;
  
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const sections = [
  { "image": Fargate, "name": "AWS", "rating": 5, "body":
    <BodySection>
      <Sentence>Solution Architect Professional & DevOps Engineer Professional</Sentence>
      <Sentence>コンテナオーケストレーション、CI/CD、DataLake、ETL・分析基盤</Sentence>
      <Sentence>サーバーレス主体のソリューション提案</Sentence>
    </BodySection>
  },
  { "image": Datadog, "name": "Datadog", "rating": 4, "body":
    <BodySection>
      <Sentence>ログ配信、ダッシュボード、外形監視、アラートの設計</Sentence>
      <Sentence>サービスレベル目標(SLO)の提案</Sentence>
      <Sentence>設計事例 <A target="_blank" href="https://qiita.com/rtflatspace1/items/74c84effcdd040f8517d">外部サイト</A> (Qiita)</Sentence>
    </BodySection>
  },
  { "image": Terraform, "name": "Terraform", "rating": 5, "body":
    <BodySection>
      <Sentence>IaC(Infrastructure as Code)の推進</Sentence>
      <Sentence>AWS、DatadogのリソースTerraform化</Sentence>
      <Sentence>設計事例 <A target="_blank" href="https://qiita.com/rtflatspace1/items/4cb454240586b1480041">外部サイト</A> (Qiita)</Sentence>
    </BodySection>
  },
  { "image": GoIcon, "name": "Go", "rating": 4, "body":
    <BodySection>
      <Sentence>API、Web、マイクロサービスの設計</Sentence>
      <Sentence>gRPCを活用したサービス間の連携、並行処理による負荷対策</Sentence>
      <Sentence>設計事例 <A target="_blank" href="https://qiita.com/rtflatspace1/items/a0ec0017226df76df684">外部サイト</A> (Qiita)</Sentence>
    </BodySection>
  },
  { "image": Typescript, "name": "Typescript", "rating": 5, "body":
    <BodySection>
      <Sentence>API、Web、マイクロサービスの設計</Sentence>
      <Sentence>React、Vue.jsを組み合わせたフロントエンド設計</Sentence>
    </BodySection>
  },
  { "image": ReactIcon, "name": "React", "rating": 4, "body":
    <BodySection>
      <Sentence>React Hooksを活用したコンポーネント設計</Sentence>
      <Sentence>Recoilを活用したステート管理</Sentence>
    </BodySection>
  },
  { "image": Vue, "name": "Vue.js", "rating": 3, "body":
    <BodySection>
      <Sentence>Nuxt.jsを活用したコンポーネント設計</Sentence>
      <Sentence>Vuexを活用したステート管理</Sentence>
    </BodySection>
  },
  { "image": PHP, "name": "PHP", "rating": 5, "body":
    <BodySection>
      <Sentence>API、Web、マイクロサービスの設計</Sentence>
      <Sentence>Laravel、Ethna、ZendFramework2、CakePHP2</Sentence>
    </BodySection>
  },
  { "image": Laravel, "name": "Laravel", "rating": 5, "body":
    <BodySection>
      <Sentence>Webサービス、キューイング、スケジュールバッチ、認証認可基盤</Sentence>
      <Sentence>React、Vue.jsを組み合わせたフロントエンド、サーバーサイド連携</Sentence>
    </BodySection>
  },
  { "image": Scala, "name": "Scala", "rating": 4, "body":
    <BodySection>
      <Sentence>オブジェクト指向、関数指向の設計</Sentence>
      <Sentence>PlayFramework2を活用したAPI、Web、マイクロサービス設計</Sentence>
    </BodySection>
  },
]

const Skill = () => {
  return (
    <Wrap id="skill">
      <H3>SKILL</H3>
      <Ul>
        {sections.map(v => {
          return (
            <Li key={v.name}>
              <Detail>
                <DetailTitle>
                  {v.image ? <Icon src={v.image}/> : <NoIcon/>}
                  <Name>{v.name}</Name>
                  <Star name="read-only" value={v.rating} size="small" readOnly />
                </DetailTitle>
                <DetailBody>
                  {v.body}
                </DetailBody>
              </Detail>
            </Li>
          )
        })}
      </Ul>
    </Wrap>
  )
}

export default Skill
