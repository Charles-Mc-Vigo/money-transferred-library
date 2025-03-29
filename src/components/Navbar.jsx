import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
	{ name: "Transactions", key: "Transactions" },
	{ name: "Summary", key: "Summary" },
	{ name: "Export", key: "Export" },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Navbar({ onSelect }) {
	return (
			<Disclosure as="nav" className="bg-blue-600">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 p-3">
							<div className="relative flex h-16 items-center justify-between">
									{/* Mobile menu button */}
									<div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
											<DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-700 focus:outline-none">
													<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
													<XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
											</DisclosureButton>
									</div>

									{/* Logo */}
									<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
											<div className="flex-shrink-0">
													<span className="text-white font-bold text-xl">
															Money Transferred Library
													</span>
											</div>

											{/* Navigation links */}
											<div className="hidden sm:ml-6 sm:block">
													<div className="flex space-x-4">
															{navigation.map((item) => (
																	<button
																			key={item.key}
																			onClick={() => onSelect(item.key)} // Trigger onSelect callback
																			className={classNames(
																					"text-white hover:bg-blue-500",
																					"rounded-md px-3 py-2 text-sm font-medium"
																			)}
																	>
																			{item.name}
																	</button>
															))}
													</div>
											</div>
									</div>
							</div>
					</div>

					{/* Mobile menu */}
					<DisclosurePanel className="sm:hidden">
							<div className="space-y-1 px-2 pt-2 pb-3 flex flex-col items-end text-right">
									{navigation.map((item) => (
											<button
													key={item.key}
													onClick={() => onSelect(item.key)} // Trigger onSelect callback
													className={classNames(
															"text-white hover:bg-blue-500",
															"block rounded-md px-3 py-2 text-base font-medium"
													)}
											>
													{item.name}
											</button>
									))}
							</div>
					</DisclosurePanel>
			</Disclosure>
	);
}