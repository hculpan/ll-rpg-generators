import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * User: usucuha
 * Date: 1/9/14
 */
public class MonstersToJson {
    final static String inputFilename = "../ll_monsters.txt";

    final static String outputFilename = "../ll_monsters.json";

    final File inputFile = new File(inputFilename);

    final File outputFile = new File(outputFilename);

    BufferedReader in;

    PrintWriter out;

    public MonstersToJson() throws IOException {
        in = new BufferedReader(new FileReader(inputFile));
        out = new PrintWriter(new FileWriter(outputFile));
    }

    public void writeValue(String name, String value, boolean lastValue) {
        String lValue = value.trim();
        if (lastValue) {
            out.println("        \"" + name + "\": \"" + lValue + "\"");
        } else {
            out.println("        \"" + name + "\": \"" + lValue + "\",");
        }
    }

    public void writeValue(String name, String value) {
        writeValue(name, value, false);
    }

    public void run() throws IOException {
        String line;
        out.println("{ \"results\": [");
        System.out.println("Processing");
        int count = 0;
        while ( (line = in.readLine()) != null ) {
            if (line.trim().length() > 0 && line.charAt(0) != '#') {
                if (count > 0) {
                    out.println(",");
                }
                out.println("    {");

                int fieldNum = 0;
                String [] fields = line.split("\\|");
                writeValue("name", fields[fieldNum++]);
                writeValue("enc_dungeon", fields[fieldNum++]);
                writeValue("enc_lair", fields[fieldNum++]);
                writeValue("align", fields[fieldNum++]);
                writeValue("move", fields[fieldNum++]);

                String ac = fields[fieldNum++];
                String [] acFields = ac.split(",");
                writeValue("ac_desc", acFields[0]);
                writeValue("ac_asc", acFields[1]);

                writeValue("hd", fields[fieldNum++]);
                writeValue("attacks", fields[fieldNum++]);
                writeValue("damage", fields[fieldNum++]);
                writeValue("save", fields[fieldNum++]);
                writeValue("morale", fields[fieldNum++]);
                writeValue("hoard_class", fields[fieldNum++]);
                writeValue("xp", fields[fieldNum++]);
                writeValue("source", fields[fieldNum++]);
                writeValue("page", fields[fieldNum++], true);

                out.print("    }");
                count++;
                System.out.print(".");
            }
        }
        out.println();
        out.println("]}");
        System.out.println("done");

        in.close();
        out.close();
    }

    public static void main(String [] args) throws Exception {
        MonstersToJson monstersToJson = new MonstersToJson();
        monstersToJson.run();
    }
}
