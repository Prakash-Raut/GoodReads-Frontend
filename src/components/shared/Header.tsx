import {
	Avatar,
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Input,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/react";
import { GoodReadsLogo } from "../home/GoodReadsLogo";
import { SearchIcon } from "./SearchIcon";

export default function Header() {
	const loggedIn = true;
	return (
		<Navbar isBordered>
			<NavbarContent justify="start">
				<NavbarBrand className="mr-4">
					<GoodReadsLogo />
					<p className="hidden sm:block font-bold text-inherit">
						Great Reads
					</p>
				</NavbarBrand>
				<NavbarContent className="hidden sm:flex gap-8">
					<NavbarItem>
						<Link
							color="foreground"
							href="/"
						>
							Home
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							href="/bookshelf"
							color="foreground"
						>
							My Books
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							color="foreground"
							href="/browse"
						>
							Browse
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							color="foreground"
							href="#community"
						>
							Community
						</Link>
					</NavbarItem>
				</NavbarContent>
			</NavbarContent>

			<NavbarContent
				as="div"
				className="items-center"
				justify="end"
			>
				<Input
					classNames={{
						base: "max-w-full sm:max-w-[30rem] h-10",
						mainWrapper: "h-full",
						input: "text-small",
						inputWrapper:
							"h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
					}}
					placeholder="Type to search..."
					size="sm"
					startContent={<SearchIcon size={18} />}
					type="search"
				/>
				{loggedIn ? (
					<NavbarItem className="hidden lg:flex">
						<Button
							as={Link}
							color="secondary"
							href="/sign-in"
							variant="ghost"
						>
							Sign In
						</Button>
					</NavbarItem>
				) : (
					<Dropdown placement="bottom-end">
						<DropdownTrigger>
							<Avatar
								isBordered
								as="button"
								className="transition-transform"
								color="secondary"
								name="Jason Hughes"
								size="sm"
								src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
							/>
						</DropdownTrigger>
						<DropdownMenu
							aria-label="Profile Actions"
							variant="flat"
						>
							<DropdownItem
								key="profile"
								className="h-14 gap-2"
							>
								<p className="font-semibold">Signed in as</p>
								<p className="font-semibold">
									zoey@example.com
								</p>
							</DropdownItem>
							<DropdownItem key="settings">
								My Settings
							</DropdownItem>
							<DropdownItem key="team_settings">
								Team Settings
							</DropdownItem>
							<DropdownItem key="analytics">
								Analytics
							</DropdownItem>
							<DropdownItem key="system">System</DropdownItem>
							<DropdownItem key="configurations">
								Configurations
							</DropdownItem>
							<DropdownItem key="help_and_feedback">
								Help & Feedback
							</DropdownItem>
							<DropdownItem
								key="logout"
								color="danger"
							>
								Log Out
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				)}
			</NavbarContent>
		</Navbar>
	);
}
