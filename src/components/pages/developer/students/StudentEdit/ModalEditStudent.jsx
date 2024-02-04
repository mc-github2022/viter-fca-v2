import React from "react";
import { FaBars } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";

const ModalEditStudent = ({ index }) => {
  return (
    <div>
      <div className="fixed top-0 left-0 z-20 h-screen w-full">
        <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-40"></div>
        <div className="z-50  h-full w-full flex justify-center items-center relative">
          <div className=" max-h-[calc(100%-350px)] h-full max-w-[1200px] m-7 w-full">
            <div className=" modal__settings__header p-2 uppercase flex justify-between border-b border-line z-30 bg-primary ">
              <div className="flex item-center gap-4">
                <button
                  className="text-base tooltip tooltip--bottom z-50 !-translate-y-0"
                  // onClick={handleShowSideNav}
                  data-tooltip="Menu"
                >
                  <FaBars />
                </button>
                <h5 className="mb-0 font-normal">Student Information</h5>
              </div>
              <button
              // onClick={handleCloseSettings}
              >
                <LiaTimesSolid />
              </button>
            </div>
            <div className="grid md:grid-cols-[200px_1fr] h-full gap-2 bg-white overflow-hidden">
              <aside className="p-5 overflow-y-auto absolute -left-[100%] md:static max-h-[100%] h-full custom__scroll bg-secondary">
                <ul className=" ">
                  <li className={`${index === 1 ? "active" : ""}`}>
                    <button
                      onClick={(e) => handleChangeProfile(1, e)}
                      className="p-1 pl-4"
                    >
                      Profile
                    </button>
                  </li>
                  <li className={` ${index === 2 ? "active" : ""}`}>
                    <button
                      onClick={(e) => handleChangeProfile(2, e)}
                      className="p-1 pl-4"
                    >
                      Code of Conduct
                    </button>
                  </li>

                  <li className={` ${index === 3 ? "active" : ""}`}>
                    <button
                      onClick={(e) => handleChangeProfile(3, e)}
                      className="p-1 pl-4"
                    >
                      Parent Declaration
                    </button>
                  </li>

                  <li className={` ${index === 4 ? "active" : ""}`}>
                    <button
                      onClick={(e) => handleChangeProfile(4, e)}
                      className="p-1 pl-4"
                    >
                      Parent Consent
                    </button>
                  </li>

                  <li className={` ${index === 5 ? "active" : ""}`}>
                    <button
                      onClick={(e) => handleChangeProfile(5, e)}
                      className="p-1 pl-4"
                    >
                      Commitment Form
                    </button>
                  </li>
                </ul>
              </aside>
              <main className="p-5 overflow-y-auto max-h-[100%] h-full custom__scroll">
                <p className="mb-10">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                  saepe ut distinctio. Omnis voluptatem debitis soluta
                  distinctio, veritatis enim porro culpa cupiditate quo dolore!
                  Debitis facere sapiente magni amet ducimus ipsum explicabo id
                  vel animi, maiores praesentium, eos voluptas officiis nesciunt
                  asperiores possimus delectus nobis ab voluptatum tenetur.
                  Impedit, nemo.
                </p>

                <p className="mb-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, voluptatum. Repellendus ad libero odit repellat,
                  fuga iste, ab aut aperiam veritatis officia quas ipsam atque
                  aspernatur quam totam hic quos quod, debitis exercitationem
                  unde. Incidunt iusto officia culpa consequatur cum qui
                  corporis voluptas sapiente facere reiciendis, sequi cupiditate
                  iste nisi accusantium odit velit est perspiciatis fugiat neque
                  maiores quia ad aliquam ipsum dolorum! In totam distinctio
                  maiores ullam cumque similique, animi fugiat sed corrupti
                  nostrum pariatur veniam optio deleniti explicabo repudiandae
                  eveniet quam! Aperiam quod, incidunt nisi eveniet odit dolore
                  porro esse laudantium tenetur odio, sequi maiores fuga eaque
                  nesciunt aspernatur suscipit. Qui id illum excepturi, modi
                  amet quasi deserunt doloremque repellat facere distinctio
                  explicabo repudiandae minima reiciendis, non ad commodi nemo
                  ipsa corrupti quaerat eaque ducimus iure. Illo recusandae
                  temporibus, totam facilis assumenda est error nostrum cumque.
                  Voluptatibus optio ipsum suscipit distinctio obcaecati eum
                  omnis corrupti? Aut dignissimos vero tenetur accusantium
                  tempore atque quibusdam placeat eius repudiandae aliquid.
                  Autem veniam aliquid eveniet similique a earum fugiat
                  consequatur aliquam! Facere, aliquid ad voluptatem deleniti,
                  optio recusandae incidunt rem voluptas nisi aperiam ducimus
                  dolore! Sed aspernatur, et quibusdam, omnis rem odio, optio
                  voluptatibus molestias dolor nam assumenda ex sit.
                  Perspiciatis accusantium ex enim amet voluptate libero,
                  laboriosam fuga numquam nam iure, molestiae distinctio sequi
                  error ipsum cumque quod eius rem, reiciendis ut quaerat! Et
                  eveniet temporibus incidunt. Laudantium molestias unde
                  dignissimos tenetur harum expedita officia non officiis
                  voluptates incidunt? Ea quaerat sunt est fugit ad. Incidunt,
                  dolorum ullam unde voluptatum maxime est illum omnis minus,
                  sint ratione dolores animi, quisquam amet voluptas nisi
                  officiis obcaecati aliquid nam tenetur recusandae cupiditate
                  aperiam velit laboriosam. Aperiam, dolorem et quidem,
                  voluptatem omnis ipsam reprehenderit possimus porro iusto aut
                  dicta non quaerat. Debitis neque eveniet vel nihil quaerat
                  fuga quos molestiae ipsam, blanditiis cum dolorum quo,
                  similique aliquam numquam dolores harum animi aspernatur sunt
                  minima rerum! At officiis, repellat libero, earum repellendus
                  nobis alias eum qui reprehenderit nesciunt minima illo numquam
                  provident voluptatem nisi minus culpa. Quod sit aliquam cumque
                  iure voluptatibus unde at quia molestiae, accusamus dolorem
                  similique, dolorum, harum aliquid nulla labore quo! Dolorum
                  fuga aliquid id eius quas nemo facilis placeat tenetur vero
                  earum error blanditiis ipsam repellendus vitae obcaecati quam
                  praesentium tempore porro omnis, fugit voluptate doloribus
                  labore. Aut quaerat molestiae accusamus corrupti molestias,
                  eos ex aperiam magnam excepturi, soluta iusto libero alias!
                  Nulla accusantium deleniti voluptatem vero culpa consequatur,
                  veritatis nisi voluptate recusandae fuga magnam quae molestiae
                  sunt natus unde ratione minus nesciunt quis labore odio! At
                  soluta itaque illo eligendi ducimus, ea alias iste excepturi
                  numquam repellat ipsam debitis laudantium deleniti aliquid
                  corporis autem ab ullam praesentium reiciendis incidunt?
                  Assumenda corrupti ad nobis blanditiis ea. Alias laborum nemo
                  dolor est harum quaerat iure voluptates necessitatibus
                  facilis. Eaque accusamus, perspiciatis provident nostrum ab
                  accusantium aut voluptate nulla qui nesciunt nobis dicta quasi
                  quisquam eum repellendus dolore deleniti dolores quidem sequi
                  obcaecati aliquam illo! Aut vero, iure nihil nisi atque
                  maiores culpa quisquam, vel pariatur ullam deserunt magni eius
                  ipsum magnam.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, voluptatum. Repellendus ad libero odit repellat,
                  fuga iste, ab aut aperiam veritatis officia quas ipsam atque
                  aspernatur quam totam hic quos quod, debitis exercitationem
                  unde. Incidunt iusto officia culpa consequatur cum qui
                  corporis voluptas sapiente facere reiciendis, sequi cupiditate
                  iste nisi accusantium odit velit est perspiciatis fugiat neque
                  maiores quia ad aliquam ipsum dolorum! In totam distinctio
                  maiores ullam cumque similique, animi fugiat sed corrupti
                  nostrum pariatur veniam optio deleniti explicabo repudiandae
                  eveniet quam! Aperiam quod, incidunt nisi eveniet odit dolore
                  porro esse laudantium tenetur odio, sequi maiores fuga eaque
                  nesciunt aspernatur suscipit. Qui id illum excepturi, modi
                  amet quasi deserunt doloremque repellat facere distinctio
                  explicabo repudiandae minima reiciendis, non ad commodi nemo
                  ipsa corrupti quaerat eaque ducimus iure. Illo recusandae
                  temporibus, totam facilis assumenda est error nostrum cumque.
                  Voluptatibus optio ipsum suscipit distinctio obcaecati eum
                  omnis corrupti? Aut dignissimos vero tenetur accusantium
                  tempore atque quibusdam placeat eius repudiandae aliquid.
                  Autem veniam aliquid eveniet similique a earum fugiat
                  consequatur aliquam! Facere, aliquid ad voluptatem deleniti,
                  optio recusandae incidunt rem voluptas nisi aperiam ducimus
                  dolore! Sed aspernatur, et quibusdam, omnis rem odio, optio
                  voluptatibus molestias dolor nam assumenda ex sit.
                  Perspiciatis accusantium ex enim amet voluptate libero,
                  laboriosam fuga numquam nam iure, molestiae distinctio sequi
                  error ipsum cumque quod eius rem, reiciendis ut quaerat! Et
                  eveniet temporibus incidunt. Laudantium molestias unde
                  dignissimos tenetur harum expedita officia non officiis
                  voluptates incidunt? Ea quaerat sunt est fugit ad. Incidunt,
                  dolorum ullam unde voluptatum maxime est illum omnis minus,
                  sint ratione dolores animi, quisquam amet voluptas nisi
                  officiis obcaecati aliquid nam tenetur recusandae cupiditate
                  aperiam velit laboriosam. Aperiam, dolorem et quidem,
                  voluptatem omnis ipsam reprehenderit possimus porro iusto aut
                  dicta non quaerat. Debitis neque eveniet vel nihil quaerat
                  fuga quos molestiae ipsam, blanditiis cum dolorum quo,
                  similique aliquam numquam dolores harum animi aspernatur sunt
                  minima rerum! At officiis, repellat libero, earum repellendus
                  nobis alias eum qui reprehenderit nesciunt minima illo numquam
                  provident voluptatem nisi minus culpa. Quod sit aliquam cumque
                  iure voluptatibus unde at quia molestiae, accusamus dolorem
                  similique, dolorum, harum aliquid nulla labore quo! Dolorum
                  fuga aliquid id eius quas nemo facilis placeat tenetur vero
                  earum error blanditiis ipsam repellendus vitae obcaecati quam
                  praesentium tempore porro omnis, fugit voluptate doloribus
                  labore. Aut quaerat molestiae accusamus corrupti molestias,
                  eos ex aperiam magnam excepturi, soluta iusto libero alias!
                  Nulla accusantium deleniti voluptatem vero culpa consequatur,
                  veritatis nisi voluptate recusandae fuga magnam quae molestiae
                  sunt natus unde ratione minus nesciunt quis labore odio! At
                  soluta itaque illo eligendi ducimus, ea alias iste excepturi
                  numquam repellat ipsam debitis laudantium deleniti aliquid
                  corporis autem ab ullam praesentium reiciendis incidunt?
                  Assumenda corrupti ad nobis blanditiis ea. Alias laborum nemo
                  dolor est harum quaerat iure voluptates necessitatibus
                  facilis. Eaque accusamus, perspiciatis provident nostrum ab
                  accusantium aut voluptate nulla qui nesciunt nobis dicta quasi
                  quisquam eum repellendus dolore deleniti dolores quidem sequi
                  obcaecati aliquam illo! Aut vero, iure nihil nisi atque
                  maiores culpa quisquam, vel pariatur ullam deserunt magni eius
                  ipsum magnam.
                </p>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditStudent;
