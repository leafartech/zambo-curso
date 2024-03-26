import Header from "@/components/header";
import Section from "@/components/section";
import Heroflex from "../../components/heroflex";
import Dropdown from "@/components/dropdown";
import Button from "@/components/button";
import Slug from "@/components/slug";
import Payment from "@/components/payment";
import ListItem from "@/components/list-item";
import MySwiper from "@/components/MySwiper";
import Card from "@/components/card";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Header />
      <main>
        <Section
          className="py-12 sm:py-24 sm:px-0 px-4"
          classNameS="bg-[#271d13]"
        >
          <Heroflex
            imagePath="bg2"
            alt=""
            height={909}
            width={818}
            imgClassName="rounded-lg sm:block hidden"
          >
            <div className="text-white flex flex-col justify-center">
              <h2 className="my-lt sm:text-3xl font-bold mb-6 sm:mb-12 text-center">Antes de te apresentar o Curso “TCC do ZERO à Aprovação”, muito prazer!</h2>
              <Image
                src={`/images/bg2.png`}
                alt={''}
                width={818}
                height={909}
                layout="responsive"
                className={`max-w-[550px] block sm:hidden rounded-lg`}
              />
              <div className="flex flex-col gap-4 text-lg mt-6">
                <p className="">Meu nome é Carla Daniele, sou advogada e Mentora de TCC há 4 anos.</p>
                <p className="">Durante esses anos ajudei dezenas de alunos de vários estados do Brasil a serem aprovados no seu TCC através da minha Mentoria.</p>
                <p className="">Desses alunos, 100% foram aprovados.</p>
                <p className="">Nos últimos meses recebi a missão do Professor Alexandre Zamboni para transformar a minha mentoria em um curso prático e acessível.</p>
                <p className="">E posso dizer com convicção que não existe nada mais completo e detalhado para você iniciar seu TCC do zero e ser aprovado com uma nota excelente.</p>
              </div>
            </div>
          </Heroflex>
        </Section>
        <Section
          className="py-12 sm:py-24 sm:px-0 px-4"
        >
          <div className="w-full">
            <h2 className="my-lt sm:text-3xl font-bold text-center">O que você vai aprender?</h2>
            <div className="w-full flex flex-col gap-4 my-6 sm:my-12">
              <Dropdown
                title="Os 3 Pilares de um TCC nota 10."
                module="Módulo 1">
                <p>Você vai descobrir quais os 3 pilares que todo TCC nota 10 tem em comum e como fazer deles a sua base para aprovação.</p>
              </Dropdown>
              <Dropdown
                title="Como elaborar na prática todos os elementos do pré-projeto."
                module="Módulo 2">
                <p>Além do tema, você vai aprender como elaborar com facilidade a introdução, problema, hipóteses, justificativa, objetivo (geral e específico), referencial teórico, metodologia e levantamento bibliográfico.</p>
              </Dropdown>
              <Dropdown
                title="Como desenvolver uma estrutura impecável."
                module="Módulo 3">
                <p>Você vai entender como estruturar o seu TCC da melhor maneira com elementos pré textuais e pós textuais.</p>
              </Dropdown>
              <Dropdown
                title="Mão na Massa."
                module="Módulo 4">
                <p>Você vai colocar a mão na massa com direcionamento para manter o seu texto fluido e coerente respeitando as normas da ABNT.</p>
              </Dropdown>
              <Dropdown
                title="Como escrever na prática a metodologia do seu trabalho."
                module="Módulo 5">
                <p>Além de você ter acesso aos tipos de metodologia, vai entender detalhadamente como escrever no seu trabalho.</p>
              </Dropdown>
              <Dropdown
                title="Como fazer uma conclusão digna de aprovação."
                module="Módulo 6">
                <p>Aqui você vai aprender como fazer uma formatação impecável e descobrir como fechar com chave de ouro o seu TCC.</p>
              </Dropdown>
              <Dropdown
                title="Os segredos de uma apresentação poderosa."
                module="Módulo 7">
                <p>Você vai descobrir na prática como encantar a banca através de uma apresentação poderosa.</p>
              </Dropdown>
            </div>
            <div className="w-full flex justify-center translate-y-3 sm:translate-y-0">
              <Button updatedUrl="#buy">Quero ser aprovado no tcc</Button>
            </div>
          </div>
        </Section>
        <Section
          className="py-12 sm:py-24 sm:px-0 px-4"
          classNameS="bg-[#f8f8f8]"
        >
          <div className="w-full flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-center sm:mb-0 mb-4">Além de tudo isso, você ainda vai ganhar <br className="hidden"/>3 Bônus Especiais:</h2>
            <div className="w-full max-w-4xl flex items-center flex-col gap-6 sm:gap-4 my-6 sm:my-12">
              <Heroflex
                alt="Planner específico"
                imgClassName=""
                imagePath="bg3"
                height={335}
                width={366}
              >
                <div className="flex flex-col items-start justify-center gap-4">
                  <div className="">
                    <Slug>Bônus 1</Slug>
                  </div>
                  <p className="text-lg leading-5 sm:text-2xl font-bold mb-4">Um Planner específico para planejar todos os passos do seu TCC e tornar o processo mais leve e prazeroso.</p>
                </div>
              </Heroflex>
              <Heroflex
                alt="Modelo para TCC"
                imgClassName=""
                imagePath="bg4"
                height={353}
                width={382}
              >
                <div className="flex flex-col items-start justify-center gap-4">
                  <div className="">
                    <Slug>Bônus 2</Slug>
                  </div>
                  <p className="text-lg leading-5 sm:text-2xl font-bold mb-4">Modelo para o seu TCC. Você vai ganhar um template para facilitar o seu processo de criação.</p>
                </div>
              </Heroflex>
              <Heroflex
                alt="Modelo de slide para apresentacao"
                imgClassName=""
                imagePath="bg5"
                height={303}
                width={366}
              >
                <div className="flex flex-col items-start justify-center gap-4">
                  <div className="">
                    <Slug>Bônus 3</Slug>
                  </div>
                  <p className="text-lg leading-5 sm:text-2xl font-bold mb-4">Modelo de Slide para uma apresentação poderosa.</p>
                </div>
              </Heroflex>
            </div>
          </div>
        </Section>
        <Section
          className="pt-20 pb-12 sm:pt-40 sm:pb-24 sm:px-0 px-4"
          classNameS="bg-zinc-950"
        >
          <div className="sm:grid sm:grid-cols-2 flex flex-col">
            <div className="flex flex-col justify-center gap-12 sm:mb-0 mb-32">
              <h2 className="text-white font-bold my-lt sm:text-3xl text-center sm:text-left">Um passo a passo prático que garante a sua aprovação no TCC:</h2>
              <ul className="flex flex-col gap-2">
                <ListItem>7 Módulos de Conteúdo Direito ao Ponto</ListItem>
                <ListItem>Planner para Planejar todos os passos do seu TCC</ListItem>
                <ListItem>Template para facilitar a criação do seu TCC</ListItem>
                <ListItem>Suporte para Tirar Dúvidas</ListItem>
                <ListItem>7 dias de garantia incondicional</ListItem>
              </ul>
            </div>
            <Payment />
          </div>
        </Section>
        <Section className="py-12 sm:py-24 sm:px-0 px-4 overflow-hidden">
          <div className="flex flex-col items-center gap-0">
            <h2 className="font-bold text-3xl">O que os alunos dizem?</h2>
            <div className="w-full sm:max-w-2xl h-96 overflow-hidden">
              <MySwiper />
            </div>
          </div>
        </Section>
        <Section
          classNameS="bg-zinc-950"
          className="py-12 sm:py-24 sm:px-0 px-4"
        >
          <div className="flex flex-col items-center gap-0">
            <h2 className="font-bold text-center my-lt sm:text-3xl text-white mb-12">Adquiri o TCC do ZERO à Aprovação, e agora?</h2>
            <div className="flex justify-center flex-wrap sm:flex-nowrap sm:gap-12 gap-6">
              <Card
                title="Confirmação de inscrição"
                number="1"
                text="Assim que for confirmado o seu pagamento no checkout, seu acesso à plataforma online será liberado."
              />
              <Card
                title="Instruções de Acesso"
                number="2"
                text="Os seus dados de acesso à plataforma (login e senha) chegarão no e-mail e WhatsApp que você cadastrou no checkout."
              />
              <Card
                title="Acessando o Produto"
                number="3"
                text="Utilize seu login e senha para acessar a plataforma e comece hoje mesmo a seguir o passo a passo do TCC do ZERO à Aprovação."
              />
            </div>
          </div>
        </Section>
        <Section className="py-12 sm:py-24 px-4 sm:px-0">
          <div className="w-full">
            <h2 className="text-3xl font-bold text-center">Perguntas frequentes</h2>
            <div className="w-full flex flex-col gap-4 my-12">
              <Dropdown
                title="Ao comprar, eu quando posso começar a assistir às aulas?">
                <p>Para cartão de crédito, débito e pix, você poderá começar imediatamente. Para compras em boleto bancário, damos um prazo de 2 dias úteis para compensar.</p>
              </Dropdown>
              <Dropdown
                title="Como receberei meu acesso?">
                <p>Após o pagamento você receberá um e-mail com o link da plataforma, login e senha para acessar o TCC do Zero à Aprovação.</p>
              </Dropdown>
              <Dropdown
                title="Tem garantia?">
                <p>Sim!<br /><br />

                  Se em até 7 (sete) dias a contar da data da compra você achar que não valeu a pena, basta pedir reembolso diretamente na plataforma Hotmart ou através do e-mail suporte@alexandrezamboni.com.br que devolveremos todo seu dinheiro.
                </p>
              </Dropdown>
              <Dropdown
                title="Qual o e-mail de suporte?">
                <p>Caso esteja com qualquer outra dúvida, envie um e-mail para suporte@alexandrezamboni.com.br.</p>
              </Dropdown>
            </div>
            <div className="w-full flex justify-center">
              <Button updatedUrl="#buy">Quero ser aprovado no tcc</Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}