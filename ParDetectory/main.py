'''October 09, 2019
The purpose of this program is to detect duplicated paragraphs.
Author @Abinet Kenore
contributor @N/A
            @ N/A
'''
import datetime
import time

crud_time = time.asctime(time.localtime(time.time()))
crud_msg = "Last time this file was modfied: "
space = 40 * '-'

def crud_log():
    crud_par = open("Timelog.txt","a")
    crud_par.write("\n" + crud_msg + "\n" + crud_time)
    crud_par.close()
    print()
    print(space)

# def get_text_file():
#     get_text = input(str("Enter your text/ past here"))

def par_detect():
    get_text = input(str( """Enter your text/ past here  """))
    par = open("textFile.txt","a")
    par.write("\n" + get_text)
    par.close()
    print(space)

if __name__ == '__main__':
    par_detect()
    crud_log()
    print("The code is rurning fine \n", (crud_time))
