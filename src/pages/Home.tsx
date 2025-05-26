import AccountSelect from "../components/AccountSelect";
import CalendarView from "../components/CalendarView";
import Header from "../components/Header";
import ListView from "../components/ListView";
import Monthly from "../components/Monthly";

const Home: React.FC = () => {
  return (
    <>
      <Header></Header>
      <section className="container_wrap">
        <AccountSelect
        // accounts={accounts}
        // selectedAccountId={selectedAccountId}
        // setSelectedAccountId={setSelectedAccountId}
        />
        <Monthly
        // selectedAccountId={selectedAccountId}
        // selectedDate={selectedDate}
        />
        <div className="flex flex-col md:flex-row gap-6">
          {/* <div className="md:w-1/2"> */}
          <div className="grow-6">
            <CalendarView
            // accounts={accounts}
            // selectedAccountId={selectedAccountId}
            // selectedDate={selectedDate}
            // setSelectedDate={setSelectedDate}
            />
          </div>
          <div className="md:w-1/2">
            <ListView
            // accounts={accounts}
            // selectedAccountId={selectedAccountId}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
