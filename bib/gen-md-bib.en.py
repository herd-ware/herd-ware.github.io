'''
File: gen-md-bib.en.py
Created Date: 2023-03-05 10:08:10 am
Author: Mathieu Escouteloup
-----
Last Modified: 2023-03-24 10:46:49 pm
Modified By: Mathieu Escouteloup
-----
License: See LICENSE.md
Copyright (c) 2023 HerdWare
-----
Description: 
'''


import bibtexparser

def bib2md(md_name, bib_name):
  with open(bib_name, "r") as f_bib:
    with open(md_name, "a") as f_md:
      db_bib = bibtexparser.load(f_bib)
      for entry in db_bib.entries:        
        f_md.write("{{< bib\n")
        f_md.write("key = \"" + entry["ID"] + "\"\n")

        e_title = entry["title"]
        e_title = e_title.replace("{", "")
        e_title = e_title.replace("}", "")
        e_title = e_title.replace("\&", "&")
        f_md.write("title = \"" + e_title + "\"\n")

        if "author" in entry.keys():
          e_author = entry["author"]
          f_md.write("author = \"" + e_author + "\"\n")

        if (entry["ENTRYTYPE"] == "inproceedings"):
          e_book = entry["booktitle"]
          e_book = e_book.replace("{", "")
          e_book = e_book.replace("}", "")
          e_book = e_book.replace("\&", "&")
          f_md.write("book = \"" + e_book + "\"\n")

        e_date = entry["year"]
        if "month" in entry.keys():
          e_date = entry["month"] + " " + e_date
        f_md.write("date = \"" + e_date + "\"\n")

        if "url" in entry.keys():
          f_md.write("link = \"" + entry["url"] + "\"\n")

        if "note" in entry.keys():
          f_md.write("note = \"" + entry["note"] + "\"\n")
        f_md.write(">}}\n\n")


def mdpart(md_name, bib_name, part_name):
  with open(md_name, "a") as f_md:
    f_md.write("## " + part_name + "\n\n")
  bib2md(md_name, bib_name)

if __name__ == '__main__':
  MD_NAME = "_index.en.md"
  PART_INFO = [
    ["tools.bib", "Digital system design and tools"],
    ["isa.bib", "Instruction Set Architecture"],
    ["uarch.bib", "Processor microarchitecture & design"],
    ["iso.bib", "Microarchitecture isolation"],
    ["pesc.bib", "Power & electromagnetic side-channels"]
  ]

  with open(MD_NAME, "w") as f_md:
    f_md.write("---\n")
    f_md.write("title: \"References\"\n")
    f_md.write("weight: 100\n")
    f_md.write("---\n")
    f_md.write("\n")

    f_md.write("## Table of contents\n")  
    f_md.write("- [Table of contents](#table-of-contents)\n")
    for p in PART_INFO:
      p_title = p[1]
      p_link = p[1]
      p_link = p_link.lower()
      p_link = p_link.replace(" ", "-")
      p_link = p_link.replace("&", "")
      f_md.write("- [" + p_title + "](#" + p_link + ")\n")
    f_md.write("\n")  
    
    
  for p in PART_INFO:
    mdpart(MD_NAME, p[0], p[1])  