function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          👋 კეთილი იყოს თქვენი მობრძანება!
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          ეს არის ჩვენი აპლიკაციის მთავარი გვერდი. ზედა მენიუდან შეგიძლიათ გადახვიდეთ იუზერების სიაზე ან გაიაროთ ავტორიზაცია.
        </p>
      </div>
    </div>
  );
}

export default Home;