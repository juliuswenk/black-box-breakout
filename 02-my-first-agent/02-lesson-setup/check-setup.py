from importlib import metadata


PACKAGES = [
    "strands-agents",
    "strands-agents-tools",
]


def main() -> None:
    for package in PACKAGES:
        version = metadata.version(package)
        print(f"{package}: {version}")

    print("Lesson 02 Python setup works.")


if __name__ == "__main__":
    main()
