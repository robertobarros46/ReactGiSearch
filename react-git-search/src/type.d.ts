interface Repository {
	full_name: string,
  forks_count: number,
  stargazers_count: number,
}

type ContextType = {
  repositories?: Repository[],
  setRepositories?: Dispatch<SetStateAction<Repository>>,
}