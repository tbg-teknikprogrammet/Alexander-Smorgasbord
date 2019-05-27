using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Editor_A
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }


        private void toolStripMenuItem8_Click(object sender, EventArgs e)
        {
            openFileDialog2.ShowDialog();
            string Chosen_File = openFileDialog2.FileName;
            richTextBox2.LoadFile(Chosen_File, RichTextBoxStreamType.PlainText);

        }

        private void toolStripMenuItem10_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            //openFileDialog2.ShowDialog();
        }

        private void toolStripMenuItem9_Click(object sender, EventArgs e)
        {
            if (saveFileDialog2.ShowDialog() != DialogResult.Cancel)
            {
                //openFileDialog2.ShowDialog();
                string Saved_File = saveFileDialog2.FileName;
                richTextBox2.SaveFile(Saved_File, RichTextBoxStreamType.PlainText);
            }
            
        }
    }
}
