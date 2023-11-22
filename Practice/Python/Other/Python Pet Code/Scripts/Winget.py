import ctypes
import subprocess
import sys


# def is_admin():
#     try:
#         return ctypes.windll.shell32.IsUserAnAdmin()
#     except:
#         return False


# def run_as_admin():
#     if is_admin():
#         subprocess.run(
#             [
#                 "[]:/Users/[]/AppData/Local/Microsoft/WindowsApps/python3.[].exe",
#                 "path of script",
#                 "--admin",
#             ],
#             check=True,
#         )
#         print("winget upgrade --all completed successfully.")
#     else:
#         ctypes.windll.shell32.ShellExecuteW(
#             None, "runas", sys.executable, " ".join(sys.argv), None, 1
#         )

# run_as_admin()

# def run_winget_upgrade():
#     try:
#         if not sys.argv[-1].startswith("C:\\"):
#             subprocess.run(
#                 ["runas", "/user:Administrator", "python"] + sys.argv + ["--admin"],
#                 check=True,
#             )
#         else:
#             subprocess.run(["winget", "upgrade", "--all"], check=True)
#             print("winget upgrade --all completed successfully.")
#     except subprocess.CalledProcessError as e:
#         print(f"Error: {e}")

def run_winget_upgrade():
    try:
        # Run the winget upgrade --all command
        subprocess.run(["winget", "upgrade", "--all"], check=True)
        print("winget upgrade --all completed successfully.")
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")

run_winget_upgrade()
