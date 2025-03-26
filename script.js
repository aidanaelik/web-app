import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Random;

public class AIProject {
    private static JLabel infoLabel, robotLabel, quoteLabel;

    public static void main(String[] args) {
        // Терезе құру
        JFrame frame = new JFrame("Жасанды Интеллект және Робототехника");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(600, 500);
        frame.setLayout(new FlowLayout());

        // Басты тақырып
        JLabel title = new JLabel("Жасанды Интеллекттің Даму Кезеңдері");
        title.setFont(new Font("Arial", Font.BOLD, 18));
        frame.add(title);

        // Кезеңдер тізімі
        String[] stages = {"1950 – ЖИ негіздері", "1980 – Сараптамалық жүйелер", "2000 – Машиналық оқыту", "2020 – Терең нейрондық желілер"};
        JComboBox<String> stageBox = new JComboBox<>(stages);
        frame.add(stageBox);

        // Ақпарат шығаратын жазу
        infoLabel = new JLabel("Кезеңді таңдаңыз.");
        frame.add(infoLabel);

        // Кнопка әрекеті
        stageBox.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String selected = (String) stageBox.getSelectedItem();
                switch (selected) {
                    case "1950 – ЖИ негіздері":
                        infoLabel.setText("1950 ж. Алан Тьюринг ЖИ тестін ұсынды.");
                        break;
                    case "1980 – Сараптамалық жүйелер":
                        infoLabel.setText("1980 ж. сараптамалық жүйелер қарқынды дамыды.");
                        break;
                    case "2000 – Машиналық оқыту":
                        infoLabel.setText("2000 ж. нейрондық желілер күшейе түсті.");
                        break;
                    case "2020 – Терең нейрондық желілер":
                        infoLabel.setText("2020 ж. GPT, DALL-E сияқты ЖИ жүйелері дамыды.");
                        break;
                }
            }
        });

        // Болашақ болжамы
        JLabel futureLabel = new JLabel("🔮 Болашақ: 2050 ж. ЖИ адам деңгейіне жетуі мүмкін.");
        futureLabel.setForeground(Color.ORANGE);
        frame.add(futureLabel);

        // Роботтар туралы тақырып
        JLabel robotTitle = new JLabel("Робототехника түрлері");
        robotTitle.setFont(new Font("Arial", Font.BOLD, 18));
        frame.add(robotTitle);

        // Робот түрлері
        String[] robots = {"🤖 Гуманоид роботтар", "🏭 Өндірістік роботтар", "🚀 Ғарыштық роботтар"};
        JComboBox<String> robotBox = new JComboBox<>(robots);
        frame.add(robotBox);

        // Робот туралы ақпарат шығатын жазу
        robotLabel = new JLabel("Робот түрін таңдаңыз.");
        frame.add(robotLabel);

        // Робот кнопкасы
        robotBox.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String selected = (String) robotBox.getSelectedItem();
                switch (selected) {
                    case "🤖 Гуманоид роботтар":
                        robotLabel.setText("🤖 Адам тәрізді роботтар интеллектке ие.");
                        break;
                    case "🏭 Өндірістік роботтар":
                        robotLabel.setText("🏭 Зауыттарда автоматты түрде жұмыс істейді.");
                        break;
                    case "🚀 Ғарыштық роботтар":
                        robotLabel.setText("🚀 NASA ғарыш зерттеулерінде қолданады.");
                        break;
                }
            }
        });

        // Дәйексөздер
        String[] quotes = {
            "\"Жасанды интеллект – болашақтың қозғаушы күші.\"",
            "\"2050 жылы роботтар біздің әр күнімізге әсер етеді.\"",
            "\"ЖИ адамзаттың ең мықты серігі бола алады.\"",
            "\"Жасанды интеллект – жаңа революцияның бастамасы.\""
        };

        // Дәйексөз тақырыбы
        JLabel quoteTitle = new JLabel("Кездейсоқ дәйексөз:");
        frame.add(quoteTitle);

        // Дәйексөз шығатын орын
        quoteLabel = new JLabel(quotes[0]);
        frame.add(quoteLabel);

        // Дәйексөз өзгерту кнопкасы
        JButton changeQuoteBtn = new JButton("Жаңа дәйексөз");
        frame.add(changeQuoteBtn);

        // Дәйексөз кнопкасының әрекеті
        changeQuoteBtn.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                Random random = new Random();
                int index = random.nextInt(quotes.length);
                quoteLabel.setText(quotes[index]);
            }
        });

        // Терезені көрсету
        frame.setVisible(true);
    }
}
