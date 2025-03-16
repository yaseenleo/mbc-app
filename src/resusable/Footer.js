import Link from "next/link";

export default function Footer() {
  return (
    <footer className='relative bg-gray-100 pt-8 pb-6'>
      <div className='container mx-auto '>
        <div className='flex flex-wrap text-left lg:text-left'>
          {/* Left Section */}
          <div className='w-full lg:w-6/12 px-4'>
            <h4 className='text-3xl font-semibold text-gray-700'>
              {"Let's keep in touch!"}
            </h4>
            <h5 className='text-lg mt-0 mb-2 text-gray-600'>
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
          </div>

          {/* Right Section */}
          <div className='w-full lg:w-6/12 px-4'>
            <div className='flex flex-wrap items-top mb-6'>
              {/* Useful Links */}
              <div className='w-full lg:w-4/12 px-0 lg:px-4 ml-auto'>
                <span className='block uppercase text-gray-500 text-sm font-semibold mb-2'>
                  Useful Links
                </span>
                <ul className='list-none space-y-2'>
                  <li>
                    <Link
                      href='/about'
                      passHref
                      className='text-neutral-600 hover:text-neutral-800 font-semibold block pb-2 text-sm'
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/blog'
                      passHref
                      className='text-neutral-600 hover:text-neutral-800 font-semibold block pb-2 text-sm'
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/free-products'
                      passHref
                      className='text-neutral-600 hover:text-neutral-800 font-semibold block pb-2 text-sm'
                    >
                      Free Products
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Other Resources */}
              <div className='w-full lg:w-4/12 px-0 lg:px-4'>
                <span className='block uppercase text-gray-500 text-sm font-semibold mb-2'>
                  Other Resources
                </span>
                <ul className='list-none space-y-2'>
                  <li>
                    <Link
                      href='/license'
                      passHref
                      className='text-neutral-600 hover:text-neutral-800 font-semibold block pb-2 text-sm'
                    >
                      MIT License
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/terms'
                      passHref
                      className='text-neutral-600 hover:text-neutral-800 font-semibold block pb-2 text-sm'
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/privacy'
                      passHref
                      className='text-neutral-600 hover:text-neutral-800 font-semibold block pb-2 text-sm'
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/contact-us'
                      passHref
                      className='text-neutral-600 hover:text-neutral-800 font-semibold block pb-2 text-sm'
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className='my-6 border-gray-300' />
        <div className='flex flex-wrap items-center md:justify-between justify-center'>
          <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
            <div className='text-sm text-gray-500 font-semibold py-1'>
              Copyright © <span id='get-current-year'>2025</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
