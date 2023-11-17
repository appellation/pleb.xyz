import classnames from "classnames";
import { type JSX, type ParentProps, splitProps, Show } from "solid-js";

export type StatusPillProps = JSX.HTMLAttributes<HTMLButtonElement> & {
	progress?: number;
};

export default function Pill(props: ParentProps<StatusPillProps>) {
	const [content, container] = splitProps(props, ["progress"]);
	const clazz = () =>
		classnames(
			props.class,
			"py-2",
			"px-4",
			"rounded-full",
			"text-stone-600",
			"dark:text-stone-400",
			"bg-stone-300/50",
			"hover:bg-stone-300",
			"dark:hover:bg-stone-700",
			"dark:bg-stone-700/50",
			"max-w-xs",
			"relative",
			"transition-all",
			"cursor-pointer",
		);

	return (
		<button {...container} class={clazz()}>
			<span class="flex gap-2 items-center z-10 relative">
				{props.children}
			</span>
			<Show when={content.progress}>
				<span class="absolute inset-0 rounded-full overflow-hidden">
					<span
						class="absolute top-0 bottom-0 left-0 bg-stone-400/25"
						style={{ width: `${content.progress! * 100}%` }}
					/>
				</span>
			</Show>
		</button>
	);
}
