// PageLayout.tsx
import { Header } from "../../components/UI/Header/Header";
import { Footer } from "../../components/UI/Footer/Footer";

const PageLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
