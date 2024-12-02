import FloatingWhatsButton from "../components/FloatingWhatsButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StartButton from "../components/StartButton";
import Testimonial from "../components/Testimonial";



export default function Home() {

  return (
    <>
      <header className="fixed w-full z-10">
        <Header />
      </header>

      <main className="h-[100%] tablet:h-screen bg-texture bg-cover bg-no-repeat">
        <div className="py-10 h-full flex justify-center flex-col items-center text-center px-2 tablet:flex-row tablet:py-0 tablet:px-20 tablet:text-justify">
          <div data-aos="fade-right" data-aos-easing="linear"
            data-aos-duration="1500" className="pt-14 px-1 tablet:p-0 tablet:w-[70%] laptop:w-[40%]">
            <h1 className=" text-black text-lg font-bold tablet:text-2xl  laptop:text-3xl">Desperte para a sua própria natureza tornando-se quem você realmente é</h1>
            <p className="text-black text-md py-3 laptop:text-lg">    Conheça o Laboratório do Ser - uma clínica de psicologia junguiana e arterapia conduzida pela
              especialista Amanda Estima e sua equipe de psicólogas, cuidadosamente selecionadas.
            </p>
            <div className="tablet:mt-10">
              <StartButton title="Inicie sua jornada aqui" />

            </div>
          </div>

          <div data-aos="fade-down" data-aos-easing="linear"
            data-aos-duration="1500" className="w-auto tablet:w-[50%] laptop:w-[40%]">
            <img className="w-48 tablet:w-full " src="/src/assets/arm.png" alt="Imagem ilustrativa de um braço tentando tocar uma borboleta" />
          </div>
        </div>
      </main>

      <section data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" data-aos-duration="1500" className="bg-coral flex justify-center items-center text-white text-sm w-full h-32 tablet:text-lg" >
        <p className="text-center laptop:w-[45%]">Descubra como a psicologia profunda de Carl Jung pode transformar sua vida em um autêntico <i>laboratório pessoal</i> de <strong>autoconhecimento</strong> e <strong>autotransformação</strong></p>
      </section>

      <section data-aos="fade-up"
        data-aos-duration="1500" id="about-lab" className="min-h-screen p-2 bg-white flex flex-col items-center justify-between laptop:flex-row">
        <div data-aos="zoom-in">
          <img src="/src/assets/spiral.png" alt="Imagem meramente ilustrativa de uma espiral" className="w-[30%] z-0 laptop:w-[100%] laptop:relative bottom-44 px-10" />
        </div>
        <div>
          <h2 className="font-bold text-lg tablet:text-2xl ">No Laboratório do Ser, nossa abordagem vai muito além da prática convencional da psicoterapia, nós buscamos uma jornada de reconexão com o <i>verdadeiro eu.</i></h2>
          <br />
          <p className="text-sm">
            A <strong>psicoterapia junguiana</strong> se destaca por sua revolucionária interpretação dos sintomas, como
            <strong> ansiedade, depressão</strong> e até <strong>manifestações físicas,</strong> vendo-os como <strong>mensageiros </strong>
            que trazem informações importantes sobre as necessidades profundas do nosso eu interior.
          </p>
          <br />

          <p className="text-sm">
            Então, ao invés de suprimi-los com soluções temporárias, <strong>nós os acolhemos e escutamos,</strong> utilizando
            as ferramentas próprias da nossa abordagem.
          </p>
          <br />

          <p className="text-sm">
            Além disso, ao enfocar a <strong>individuação</strong>, que é o processo de integração entre os aspectos conscientes
            e inconscientes da nossa psique, vivemos de maneira mais fiel à nossa verdadeira natureza, o que promove o
            autoconhecimento, o crescimento pessoal e a <strong>descoberta do nosso propósito.</strong>
          </p>
          <br />
          <p className="text-sm">
            Descubra como a psicologia profunda de Carl Jung pode transformar sua vida em um autêntico laboratório pessoal de <strong>autoconhecimento</strong> e <strong>autotransformação</strong>
          </p>
          <br />
          <p className="text-sm"><strong>Descubra você.</strong></p>

        </div>
        <img data-aos="zoom-in" src="/src/assets/dive.png" alt="Imagem meramente ilustrativa de uma mulher mergulhando" className="w-[50%] relative top-2 left-16 tablet:top-3 laptop:w-[30.5%] laptop:relative laptop:top-48 laptop:left-0 desktop:top-32" />
      </section>

      <section data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" data-aos-duration="1500" id="about-us" className="p-2 bg-coral min-h-screen text-white flex justify-center items-center gap-2 flex-col laptop:flex-row" >
        <img data-aos="zoom-in" data-aos-duration="2000" className="w-32 laptop:w-[40%]" src="/src/assets/woman-cup.png" alt="Imagem meramente ilustrativa de uma mulher com um copo e lendo um caderno" />
        <div className="text-center laptop:text-right laptop:w-[45%]">
          <h2 className="font-bold text-lg tablet:text-2xl">Receba o apoio da nossa equipe para escolher a sua psicoterapeuta</h2>
          <br />
          <p className="font-extralight text-sm">
            Nossa equipe é composta por <strong>especialistas cuidadosamente selecionadas,</strong> comprometidas com <strong>valores éticos</strong> e sociais,
            incluindo <strong>princípios feministas, antirracistas, antiproibicionistas e antimanicomiais</strong>.
          </p>
          <br />
          <p className="font-extralight text-sm">
            No Laboratório do Ser, nós mantemos um <strong>ambiente acolhedor e respeitoso</strong> e oferecemos um espaço seguro para todos os
            nossos clientes.
          </p>
          <br />
          <p className="font-extralight text-sm">
            Para encontrar a terapeuta que melhor se adapte às suas necessidades, convidamos você a entrar em contato conosco via WhatsApp.
            Assim, poderemos avaliar juntos a melhor opção para a sua <strong>jornada de autoconhecimento e desenvolvimento</strong>.
          </p>
          <br />
          <StartButton title="Inicie sua jornada aqui" />
        </div>
      </section>

      <section data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" id="why-us" className="min-h-screen bg-beige flex flex-col items-center justify-center text-black ">
        <div className="p-5 laptop:p-10">
          <h2 className="text-lg tablet:text-2xl font-bold text-center">Mas por que escolher o Laboratório do Ser?</h2>
          <p className="font-light text-base text-center">Conheça os motivos que fazem nossa abordagem ser tão especial:</p>
        </div>

        <div className="flex items-center justify-center gap-5 p-2 flex-wrap laptop:items-start text-sm tablet:text-base">
          <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300"
            className="laptop:w-[18%]"><h3 className="font-bold tablet:text-lg">Clareza através da análise de sonhos</h3>
            <p>
              Uma das maiores descobertas de Carl Jung é a de que os sonhos oníricos e oferecem mensagens simbólicas fundamentais para nossa consciência! Essa é uma ferramenta significativa para nos guiar e nos revelar os aspectos ocultos da nossa alma, proporcionando entendimentos profundos para o autoconhecimento.
            </p>
          </div>
          <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="600" className="laptop:w-[22%]">
            <h3 className="font-bold tablet:text-lg">Transformação pessoal pela análise de complexos</h3>
            <p>
              Exploramos padrões emocionais e comportamentais inconscientes, formados por experiências passadas, como rejeição, abandono e dependência emocional. Essa análise identifica e trabalha os bloqueios e conflitos internos que impedem seu crescimento pessoal. Ao compreender e resolver esses complexos, você abre caminho para uma vida mais plena e autêntica, livre das amarras do passado.
            </p></div>
          <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="900" className="laptop:w-[22%]">
            <h3 className="font-bold tablet:text-lg">Expressão criativa como ponte para autodescoberta</h3>
            <p>
              Ao se expressar por meio de atividades artísticas como desenho, pintura ou colagem, você acessa e articula emoções e pensamentos que estão além das palavras, criando um canal seguro para comunicação com o inconsciente. Para isso, não é necessário ter habilidades artísticas; pois estamos interessadas na sua expressão pessoal, não na estética das suas criações. Este é um processo para fortalecer a sua conexão com o Self, favorecendo uma transformação pessoal profunda.
            </p></div>
          <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1100" className="laptop:w-[22%] ">
            <h3 className="font-bold tablet:text-lg">Descubra o caminho da individuação</h3>
            <p>
              A individuação é uma jornada profunda de autoconhecimento que te leva a uma vida autêntica e equilibrada, permitindo alcançar o seu pleno potencial, pois é ao explorar e reconciliar os diferentes aspectos da sua psique, que você desvenda sua verdadeira essência. Este caminho te conduz a realização em todos os aspectos da sua vida
            </p></div>
        </div>

      </section>

      <section data-aos="fade-up" data-aos-duration="1500" id="steps" className="min-h-screen flex justify-center p-2 bg-coral text-white ">
        <div data-aos="fade-up" data-aos-duration="1500" className="flex flex-col items-center justify-center gap-5 tablet:w-[50%]">
          <div className="text-center">
            <h2 className="text-lg font-bold laptop:text-2xl">Os seus próximos passos</h2>
            <p className="font-light py-1">Passo a passo para embarcar em sua jornada terapêutica</p>
          </div>

          <ol className="text-sm" data-aos="fade-up" data-aos-duration="1500" >
            <li className="py-2">
              <h3 className="font-bold">1. Comece agora:</h3>
              <p className="font-light">Clique no botão abaixo para entrar em contato e iniciar sua jornada.</p>
            </li>
            <li className="py-2">
              <h3 className="font-bold">2. Escolha sua psicoterapeuta:</h3>
              <p className="font-light">Vamos juntas encontrar a especialista que melhor atende às suas necessidades.</p>
            </li>
            <li className="py-2">
              <h3 className="font-bold">3. Primeira sessão:</h3>
              <p className="font-light">Faça o pagamento e agende sua sessão experimental com a terapeuta escolhida.</p>
            </li>
            <li className="py-2">
              <h3 className="font-bold">4. Decida seu caminho:</h3>
              <p className="font-light">
                Se gostar da sessão, seguimos adiante. Caso contrário, você tem a opção de experimentar outra terapeuta,
                sem custos adicionais.
              </p>
            </li>
          </ol>
          <StartButton data-aos="fade-up" data-aos-duration="1500" title="Marque sua consulta" />

        </div>

      </section>

      <section data-aos="fade-up" data-aos-duration="1500"
        id="testimonials" className="min-h-screen flex flex-col items-center justify-center  bg-purple text-white tablet:py-5 p-2 laptop:px-10 laptop:py-16  laptop:items-start">
        <div className="mb-2 text-center laptop:text-start">
          <img src="/src/assets/flower-hand.png" alt="Imagem meramente ilustrativa de uma mão segurando uma flor" className=" w-1/2 tablet:w-1/4 m-auto laptop:hidden" />
          <h2 className="font-semibold text-lg laptop:text-3xl">Os frutos do Laboratório do Ser</h2>
          <p>Veja nossas pacientes em suas jornadas de individuação</p>

        </div>
        <div className="">
          <div className="py-2 flex gap-3 flex-col justify-center items-start tablet:items-center text-xs laptop:flex-row laptop:items-end laptop:py-5">
            <Testimonial text={
              <>
                Amanda! Passando pra te deixar um feedback da sua clínica junguiana.
                Estou há 2 meses com uma pessoa da sua equipe e preciso admitir que{" "}
                <span className="border-b-red-700 border-solid border-b">
                  comecei o processo sem muito ânimo, mas porque precisava mesmo
                </span>
                . Com o decorrer das sessões{" "}
                <span className="bg-yellow ">
                  fui criando gosto por analisar meus sonhos e, quando começamos as produções criativas, minha vida começou a mudar completamente
                </span>
                . Comecei a realmente entender o que o meu inconsciente queria de mim e
                está sendo um processo profundo e transformador. Muito obrigada! E
                sucesso na jornada!
              </>} />

            <Testimonial text={
              <>
                Bom dia Amandinha! Gostaria de expressar minha profunda gratidão pela
                psicoterapia que tenho realizado na Clínica Laboratório do Ser.{" "}
                <span className="bg-yellow">
                  O apoio, a compreensão e o profissionalismo têm sido fundamentais para
                  o meu progresso e cura das crises de ansiedade
                </span>{" "}
                que te falei que estava tendo. Estou crescendo e me conhecendo mais a
                cada sessão, e isso só é possível graças ao seu trabalho dedicado. <br /> <br />Muito obrigado por estar ao meu lado nessa jornada! Deus te cubra de bênçãos!
              </>
            } />

            <Testimonial text={
              <>
                E estou mais encantada ainda com o vínculo, sintonia e sincronia que
                estamos tendo no processo terapêutico. A sua indicação parece ter sido
                muito assertiva, pq sinto que <span className="bg-yellow"> ela consegue ir me dando ferramentas que tão me ajudando a lidar com os
                  desafios que tenho, e de uma forma muito amorosa e cuidadosa.</span> E ainda assim muito profunda, a última sessão em especial <span className="bg-yellow"> me fez entrar em contato com partes minhas tão importantes, doloridas e difíceis e ao
                    mesmo tempo num momento q me senti tão segura pra lidar com elas.</span> Enfim... Agradeço sua presença tb no processo, ao Jung, à Nise. A arte salva mesmo.
                <br />
                <br />
                Agradeço mais uma vez 🙏❤️✨🍃
              </>
            } />
            <img data-aos="fade-down"
              data-aos-duration="2000" src="/src/assets/flower-hand.png" alt="Imagem meramente ilustrativa de uma mão segurando uma flor" className="hidden tablet:1/2 w-1/2 laptop:relative laptop:bottom-20 laptop:w-[27%] laptop:block" />

          </div>

          <div className="flex justify-center py-2 gap-3 flex-col items-start text-xs laptop:flex-row tablet:items-center laptop:items-start laptop:py-5">
            <Testimonial text={
              <> Queria muito te agradecer pelo trabalho incrível da clínica Laboratório do Ser. <span className="bg-yellow">
                A psicoterapia junguiana tá transformando minha vida de um jeito que eu nem imaginava.
                Me sinto mais conectada comigo mesma e descobrindo um monte de coisas sobre quem eu sou de verdade.
              </span> Só queria dizer que sou muito grata por todo o apoio e dedicação de vocês!
                <br />
                Abraço e sucesso pra você Amanda 🙏
              </>
            } />

            <Testimonial text={
              <>
                Amandaa, faz tempo que planejo te escrever mas só agora arrumei tempo! Quero registrar minha satisfação com o excelente serviço de psicologia prestado pela sua equipe.
                <span className="bg-yellow"> Meu esposo está com uma especialista e eu estou com outra e estamos nos sentindo abençoados por cruzar seu caminho.
                </span>
                <span className="border-b-red-700 border-solid border-b"> Realmente a terapia junguiana é tudo o que você diz por aqui.
                </span> Obrigada por realizar esse projeto e transformar nossas vidas. Deus te abençoe!

              </>
            } />

            <Testimonial text={
              <>
                Oi Amanda, tudo bem? Estou tão feliz com minha experiência na clínica de psicoterapia junguiana com a profissional da sua equipe!
                Desde o início, senti uma conexão genuína e um acolhimento incrível. A abordagem dela tem sido realmente transformadora.
                <span className="bg-yellow"> A cada sessão me sinto mais próxima de entender quem eu realmente sou e como posso crescer.
                </span> Só queria agradecer por toda a orientação e apoio! 🌻
              </>} />


            <Testimonial text={
              <>
                Amanda, tudo bem contigo mulher? Quero agradecer imensamente pelo trabalho incrível da profissional da sua equipe que está me acompanhando.
                <span className="bg-yellow"> Que sorte a minha encontrar o Laboratório do Ser! A Psicologia Junguiana tem sido uma ferramenta poderosa na minha vida,
                  especialmente na análise dos meus sonhos e no cuidado dos meus complexos.
                </span>

                <span className="border-b-red-700 border-solid border-b"> Sinto que estou me conhecendo de uma maneira que jamais pensei ser possível!
                </span> O apoio e a atenção que recebo de vocês têm sido essenciais para essa transformação. Muito obrigado por tudo!

              </>
            } />

          </div>
        </div>
        <div>
        </div>

      </section>

      <footer>
        <Footer />
      </footer>
      <div>
        <FloatingWhatsButton />
      </div>
    </>
  )
}

