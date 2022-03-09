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
    height: 360px;
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

const P = styled.p`
  margin: 5px 0;
  line-height: 1.4em;
`

const sections = [
  { "image": Fargate, "name": "AWS", "rating": 5, "body":
    <>
      <P>Solution Architect Professional および DevOps Engineer Professional の資格を継続更新しています。</P>
      <P>コンテナオーケストレーション、CI/CD環境、DataLake、ETLや分析基盤の設計および構築が得意分野です。</P>
      <P>主にサーバーレス、マネージメントサービスを組み合わせたアーキテクチャを提案できます。</P>
    </>
  },
  { "image": Datadog, "name": "Datadog", "rating": 4, "body":
    <>
      <P>ログの配信、ダッシュボード、外形監視やアラートなど様々な監視リソースを構築できます。</P>
      <P>さらに、各プロジェクトに応じたサービスレベル目標(SLO)を提案できます。</P>
      <P>AWSのログをDatadogに配信するアーキテクチャの一例を<a target="_blank" href="https://qiita.com/rtflatspace1/items/74c84effcdd040f8517d">こちら</a>に公開しています。</P>
    </>
  },
  { "image": Terraform, "name": "Terraform", "rating": 5, "body":
      <>
        <P>IaC(Infrastructure as Code)を推進しています。AWSやDatadogのリソースをTerraformで実装できます。</P>
        <P>Terraformを利用した実装の一例を<a target="_blank" href="https://qiita.com/rtflatspace1/items/74c84effcdd040f8517d">こちら</a>に公開しています。</P>
      </>
  },
  { "image": GoIcon, "name": "Go", "rating": 4, "body":
    <>
      <P>3年以上の業務経験があります。APIやWebサービス、マイクロサービスの設計および実装ができます。</P>
      <P>また、gRPCを利用したサービス間の連携、並行処理による負荷対策など、上級レベルの実装も可能です。</P>
      <P>テストコードを書くための設計手法を<a target="_blank" href="https://qiita.com/rtflatspace1/items/a0ec0017226df76df684">こちら</a>に公開しています。</P>
    </>
  },
  { "image": Typescript, "name": "Typescript", "rating": 5, "body":
      <>
        <P>3年以上の業務経験があります。WebフロントエンドではReactやVue.jsと組み合わせて活用できます。</P>
        <P>サーバーサイドの分野では、FaaSのランタイムに選定することが多いです。</P>
        <P>とくに技術選定でTypescriptを選ぶことが多く、個人的に一番肌の合う言語です。</P>
      </>
  },
  { "image": ReactIcon, "name": "React", "rating": 4, "body":
      <>
        <P>React Hooksを活用したコンポーネントの設計および実装ができます。</P>
        <P>ReduxやRecoilを活用したステート管理など、上級レベルの実装も可能です。</P>
        <P>当サイトが、Gatsbyを活用したReactベースのコーディングで構築されています。</P>
      </>
  },
  { "image": Vue, "name": "Vue.js", "rating": 3, "body":
      <>
        <P>Vue.js バージョン2およびNuxt.jsの経験があります。</P>
        <P>技術選定ではReactを選ぶことが多いですが、Vue.jsを活用した一連のフロントエンドサービスを作成することができます。</P>
      </>
  },
  { "image": PHP, "name": "PHP", "rating": 5, "body":
      <>
        <P>5年以上の業務経験があります。Laravelを活用したWebサービスの実装ができます。</P>
        <P>現在まで活用したことのあるフレームワークは、Laravel、Ethna、ZendFramework2、CakePHP2があります。</P>
      </>
  },
  { "image": Laravel, "name": "Laravel", "rating": 5, "body":
      <>
        <P>Webサービス、キューイング、スケジュールバッチなど様々な要件に応じた実装ができます。</P>
        <P>ReactやVue.jsとの連携、認証認可基盤でフロントエンドとサーバーサイドの繋ぎこみを実現します。</P>
        <P>機能要件、非機能要件までWebサービスのオールインワン設計を提案できます。</P>
      </>
  },
  { "image": Scala, "name": "Scala", "rating": 4, "body":
      <>
        <P>1年以上の業務経験があります。オブジェクト指向、関数指向の設計および実装ができます。</P>
        <P>PlayFramework2を活用した一連のWebサーバーサイドの実装を経験しています。</P>
        <P>とくに関数指向のパラダイムシフトに影響を受けており、他の言語と技術選定の選択肢として提案できます。</P>
      </>
  },
]

const Skill = () => {
  return (
    <Wrap id="skill">
      <H3>SKILL</H3>
      <Ul>
        {sections.map(v => {
          return (
            <Li>
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
