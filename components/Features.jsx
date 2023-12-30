import Image from "next/image"
const Features = () => {
  return (
    <div className="py-12"><h2 className="text-center  text-2xl md:text-3xl lg:text-4xl text-slate-800 md:font-semibold">Features our users love</h2>
      <div className="grid py-5 mt-6 gap-8 gap-y-12 lg:grid-cols-3 ">
        <div className="text-center justify-center  flex flex-col items-center space-y-3">
          <Image src={"/features/1.svg"} width={70} height={70} />
          <h2 className="text-xl text-slate-900 tracking-tight font-semibold">Multiple devices</h2>
          <p className="text-slate-600">Safely synchronize across devices with Bank standard security.</p>
        </div>
        <div className="text-center justify-center  flex flex-col items-center space-y-3">
          <Image src={"/features/2.svg"} width={70} height={70} />
          <h2 className="text-xl text-slate-900 tracking-tight font-semibold">Recurring transaction</h2>
          <p className="text-slate-600">Get notified of recurring bills and transactions before due date.</p>
        </div>
        <div className="text-center justify-center  flex flex-col items-center space-y-3">
          <Image src={"/features/3.svg"} width={70} height={70} />
          <h2 className="text-xl text-slate-900 tracking-tight font-semibold">Travel mode</h2>
          <p className="text-slate-600">All currencies supported with up-to-date exchange rate.</p>
        </div>
        <div className="text-center justify-center  flex flex-col items-center space-y-3">
          <Image src={"/features/4.svg"} width={70} height={70} />
          <h2 className="text-xl text-slate-900 tracking-tight font-semibold">Saving plan</h2>
          <p className="text-slate-600">Keep track on savings process to meet your financial goals.</p>
        </div>
        <div className="text-center justify-center  flex flex-col items-center space-y-3">
          <Image src={"/features/5.svg"} width={70} height={70} />
          <h2 className="text-xl text-slate-900 tracking-tight font-semibold">Debt and loan</h2>
          <p className="text-slate-600">Manage your debts, loans and payment process in one place.</p>
        </div>
        <div className="text-center justify-center  flex flex-col items-center space-y-3">
          <Image src={"/features/6.svg"} width={70} height={70} />
          <h2 className="text-xl text-slate-900 tracking-tight font-semibold">Scan receipt</h2>
          <p className="text-slate-600">Take pictures of your receipts to auto-process and organize them.</p>
        </div>
      </div>
    </div>
  )
}

export default Features