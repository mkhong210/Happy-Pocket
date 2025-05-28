import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
