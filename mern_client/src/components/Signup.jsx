import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const {} = useContext(AutheContext);
  
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = event.email.value;
    const password = event.password.value;
  }
  return (
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold">Sign Up Form For The Bookstore     </h1>
				</div>
				<div class="divide-y divide-gray-200">
					<form class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input autocomplete="off" id="email" name="email" type="text" class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
						</div>
						<div class="relative">
							<input autocomplete="off" id="password" name="password" type="password" class="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
						</div>
                        <p>If you have an account. Please <Link to="/login"><span className='text-blue-500'>Login</span></Link> Here</p>
						<div class="relative">
							<button class="bg-blue-500 text-white rounded-md px-2 py-1 w-36">Sign Up</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}

export default Signup
