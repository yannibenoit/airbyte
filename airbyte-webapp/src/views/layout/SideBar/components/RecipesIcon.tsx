const RecipesIcon = ({
  color = "currentColor",
}: {
  color?: string;
}): JSX.Element => (
  <svg width="21" height="17" viewBox="0 0 21 17" fill="none">
    <path
      d="M3 12.0005V5.50049C3 4.30701 3.47411 3.16242 4.31802 2.31851C5.16193 1.47459 6.30653 1.00049 7.5 1.00049C8.69347 1.00049 9.83807 1.47459 10.682 2.31851C11.5259 3.16242 12 4.30701 12 5.50049V12.5005C12 13.1635 12.2634 13.7994 12.7322 14.2683C13.2011 14.7371 13.837 15.0005 14.5 15.0005C15.163 15.0005 15.7989 14.7371 16.2678 14.2683C16.7366 13.7994 17 13.1635 17 12.5005V5.83049C16.3325 5.59458 15.7699 5.13029 15.4116 4.51968C15.0534 3.90907 14.9225 3.19146 15.0422 2.4937C15.1619 1.79593 15.5244 1.16294 16.0656 0.706614C16.6069 0.250285 17.292 0 18 0C18.708 0 19.3931 0.250285 19.9344 0.706614C20.4756 1.16294 20.8381 1.79593 20.9578 2.4937C21.0775 3.19146 20.9466 3.90907 20.5884 4.51968C20.2301 5.13029 19.6675 5.59458 19 5.83049V12.5005C19 13.694 18.5259 14.8386 17.682 15.6825C16.8381 16.5264 15.6935 17.0005 14.5 17.0005C13.3065 17.0005 12.1619 16.5264 11.318 15.6825C10.4741 14.8386 10 13.694 10 12.5005V5.50049C10 4.83745 9.73661 4.20156 9.26777 3.73272C8.79893 3.26388 8.16304 3.00049 7.5 3.00049C6.83696 3.00049 6.20107 3.26388 5.73223 3.73272C5.26339 4.20156 5 4.83745 5 5.50049V12.0005H8L4 17.0005L0 12.0005H3Z"
      fill={color}
    />
  </svg>
);

export default RecipesIcon;