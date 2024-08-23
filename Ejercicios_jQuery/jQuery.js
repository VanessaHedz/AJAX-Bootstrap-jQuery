$(document).ready(function(){
    $("button").click(function(){
        $("p").css("background-color","yellow");
    });
    $("p").dblclick(function(){
        $(this).hide();
    });
    $("#p1").mouseenter(function(){
        alert("You entered p1!");
    });
    $("#p2").mouseleave(function(){
        alert("Bye! You now leave p1!");
    });
});

/*     //EL CÓDIGO PERO EN JAVA NATIVO 💀
        
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Main {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Cambiar color de fondo");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(300, 200);

        JPanel panel = new JPanel();
        JButton button = new JButton("Cambiar color");
        JLabel label = new JLabel("Texto de ejemplo");

        button.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                label.setBackground(Color.YELLOW);
            }
        });

        panel.add(button);
        panel.add(label);
        frame.add(panel);
        frame.setVisible(true);
    }
}

*/