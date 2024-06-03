import Image from 'next/image'
import LogoCp from '../../public/logo.png'
function Logo() {
    return(

       <>
       <div className='flex'>
       <Image
       className='ml-8'
      src={LogoCp}
      width={50}
      height={50}
      alt="CP"
    />
    <h5 className='flex items-center pl-5 text-2xl font-semibold font-sedan'> <p className='text-logoColor'>Cli</p> mate <p className='text-logoColor'>Pul</p>se</h5>
       </div>
       </>
    );
    
}

export default Logo;