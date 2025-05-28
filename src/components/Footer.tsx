const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-6">
      <div className="text-center space-y-1 text-sm">
        {/* <p>제작 : 홍민경</p> */}
        <p>
          이메일 :{" "}
          <a
            href="mailto:ghdalsrud210@naver.com"
            className="underline hover:text-gray-200"
          >
            ghdalsrud210@naver.com
          </a>
        </p>
        <p>Copyright 홍민경 Corp. All right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
