import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class AI_Timeline {
    public static void main(String[] args) {
        // Терезе жасау
        JFrame frame = new JFrame("Жасанды Интеллекттің Даму Кезеңдері");
        frame.setSize(500, 500);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new BorderLayout());

        // Тақырып
        JLabel titleLabel = new JLabel("Жасанды Интеллекттің Даму Кезеңдері", SwingConstants.CENTER);
        titleLabel.setFont(new Font("Arial", Font.BOLD, 16));
        frame.add(titleLabel, BorderLayout.NORTH);

        // Ақпарат мәтіні
        JTextArea infoArea = new JTextArea("Төмендегі батырмаларды басып, әр кезең туралы біліңіз.");
        infoArea.setWrapStyleWord(true);
        infoArea.setLineWrap(true);
        infoArea.setEditable(false);
        frame.add(new JScrollPane(infoArea), BorderLayout.CENTER);

        // Батырмалар панелі
        JPanel buttonPanel = new JPanel();
        buttonPanel.setLayout(new GridLayout(3, 2, 10, 10));

        // ЖИ кезеңдері
        JButton btn1950 = new JButton("1950 - ЖИ негіздері");
        JButton btn1980 = new JButton("1980 - Сараптамалық жүйелер");
        JButton btn2000 = new JButton("2000 - Машиналық оқыту");
        JButton btn2020 = new JButton("2020 - Терең нейрондық желілер");

        // Робот түрлері
        JButton btnHumanoid = new JButton("🤖 Гуманоид роботтар");
        JButton btnIndustrial = new JButton("🏭 Өндірістік роботтар");

        // Батырма әрекеттері
        btn1950.addActionListener(e -> infoArea.setText("1950 жылдары Алан Тьюринг ЖИ негізін қалады. Ол Тьюринг тестін ұсынды."));
        btn1980.addActionListener(e -> infoArea.setText("1980 жылдары сараптамалық жүйелер танымал болды, олар арнайы білім негізінде шешім қабылдады."));
        btn2000.addActionListener(e -> infoArea.setText("2000 жылдары машиналық оқыту қарқынды дамыды, деректермен жұмыс істеу тиімдірек бола бастады."));
        btn2020.addActionListener(e -> infoArea.setText("2020 жылдары терең нейрондық желілер мен GPT секілді модельдер жасалды."));
        btnHumanoid.addActionListener(e -> infoArea.setText("🤖 Гуманоид роботтар – адам тәрізді роботтар. Олар жасанды интеллектпен жабдықталып, қозғалысты имитациялайды."));
        btnIndustrial.addActionListener(e -> infoArea.setText("🏭 Өндірістік роботтар – зауыттар мен өндіріс орындарында қолданылатын автоматтандырылған құрылғылар."));

        // Батырмаларды панельге қосу
        buttonPanel.add(btn1950);
        buttonPanel.add(btn1980);
        buttonPanel.add(btn2000);
        buttonPanel.add(btn2020);
        buttonPanel.add(btnHumanoid);
        buttonPanel.add(btnIndustrial);

        // Панельді терезеге қосу
        frame.add(buttonPanel, BorderLayout.SOUTH);

        // Терезені көрсету
        frame.setVisible(true);
    }
}
