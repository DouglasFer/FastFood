import { ContainerHeader, ContentHeader, Search } from "./headerStyle";
import Logo from "../images/logo.svg";
export const Header = ({ setFilteredProducts }) => {
  return (
    <ContainerHeader>
      <ContentHeader>
        <img src={Logo} alt="Logo Burguer Kenzie" />
        <Search>
          <input type="text" placeholder="Digitar Pesquisa" id="searchValue" />

          <button
            type="button"
            onClick={() =>
              setFilteredProducts(
                document
                  .getElementById("searchValue")
                  .value.toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
              )
            }
          >
            Pesquisar
          </button>
        </Search>
      </ContentHeader>
    </ContainerHeader>
  );
};
