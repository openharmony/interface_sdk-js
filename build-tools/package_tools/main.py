import os  
import sys  
import subprocess
  
def find_files(target_folder):  
    sub_folders = ['api', 'arkts', 'kits']  
    file_extensions = ['.d.ts', '.d.ets']  
    matching_files = []  
    debug_info = []  # 用于收集调试信息  
  
    for root, dirs, files in os.walk(target_folder):  
        # 跳过名为'build-tools'的目录及其子目录  
        if 'build-tools' in dirs:  
            dirs.remove('build-tools')  
  
        # 规范化路径并检查是否包含目标子文件夹  
        normalized_path = os.path.normpath(root)  
        path_parts = normalized_path.split(os.sep)  
          
        # 调试信息：记录当前路径及其部分  
        debug_info.append(f"当前路径: {root}")  
        debug_info.append(f"路径部分: {path_parts}")  
          
        if any(folder in path_parts for folder in sub_folders):  
            debug_info.append(f"在路径中发现目标子文件夹: {root}")  
            for file in files:  
                if any(file.endswith(ext) for ext in file_extensions):  
                    file_path = os.path.join(root, file)  
                    matching_files.append(file_path)  
                    debug_info.append(f"找到匹配文件: {file_path}")  
      
    # 返回匹配文件列表和调试信息  
    return matching_files, debug_info  
  
if __name__ == '__main__':  
    if len(sys.argv) < 2:  
        print("错误：请通过命令行参数指定文件夹路径。例如：python script.py /path/to/folder")  
        sys.exit(1)  
      
    target_folder = sys.argv[1]  
    if not os.path.exists(target_folder):  
        print(f"错误：路径 '{target_folder}' 不存在。")  
        sys.exit(1)  
      
    matching_files, debug_info = find_files(target_folder)  
      
    # 输出调试信息  
    print("\n调试信息：")  
    for info in debug_info:  
        print(info)  
      
    # 输出结果  
    if matching_files:  
        for path in matching_files: 
            absolute_inputpath = os.path.abspath(path)
            absolute_outputpath = os.path.abspath('./output')
            p = subprocess.Popen(['node','./src/deleteTool/entry.js', '--input', absolute_inputpath, '--output', absolute_outputpath],stdout=subprocess.PIPE) 
            print(absolute_outputpath)  
    else:  
        print(f"未找到任何匹配的文件。请检查路径 '{target_folder}' 下是否存在api、arkts、kit文件夹及其包含的.d.ts/.d.ets文件，并确保未被build-tools目录屏蔽。")