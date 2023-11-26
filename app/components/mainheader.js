import Image from 'next/image';
import Link from 'next/link';

export default function MainHeader({ pageHeading, pageImg }) {
  return (
    <>
      <header className="innerHeader bg-center bg-no-repeat bg-cover shadow-inner border-b border-slate-600"
        style={{ backgroundImage: "url('../images/" + pageImg + "')" }} >
        <h1>{pageHeading}</h1>
        <span></span>
        {/* <i className='bg-fixed bg-left-bottom lg:bg-top' style= {{backgroundImage:"url('../images/bg001.png')"}}></i> */}
      </header>

    </>
  );
}